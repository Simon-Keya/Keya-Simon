import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import logger from './logger';

const { OAuth2 } = google.auth;

// Configure OAuth2 client for Gmail
const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

// Create a nodemailer transporter using OAuth2
const createTransporter = async () => {
  const accessToken = await oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_USER,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: accessToken.token,
    },
  });

  return transporter;
};

// Function to send an email
export const sendEmail = async (to: string, subject: string, text: string, html?: string) => {
  try {
    const transporter = await createTransporter();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);
    logger.info(`Email sent to ${to}`);
  } catch (error) {
    logger.error(`Failed to send email to ${to}: ${error}`);
    throw new Error('Failed to send email');
  }
};

// Function to send a password reset email
export const sendPasswordResetEmail = async (to: string, resetToken: string) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
  const subject = 'Password Reset Request';
  const text = `You are receiving this email because you (or someone else) have requested the reset of a password. Please click on the following link, or paste this into your browser to complete the process: ${resetUrl}`;
  const html = `<p>You are receiving this email because you (or someone else) have requested the reset of a password.</p><p>Please click on the following link, or paste this into your browser to complete the process:</p><p><a href="${resetUrl}">${resetUrl}</a></p>`;

  try {
    await sendEmail(to, subject, text, html);
  } catch (error) {
    logger.error(`Failed to send password reset email to ${to}: ${error}`);
    throw new Error('Failed to send password reset email');
  }
};
