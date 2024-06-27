import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  dbUri: process.env.DB_URI ,
  gmailClientId: process.env.GMAIL_CLIENT_ID,
  gmailClientSecret: process.env.GMAIL_CLIENT_SECRET,
  gmailRefreshToken: process.env.GMAIL_REFRESH_TOKEN,
  gmailUser: process.env.GMAIL_USER,
};

export default config;
