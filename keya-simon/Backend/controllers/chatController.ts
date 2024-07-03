import { NextFunction, Request, Response } from 'express';
import { getMessages, getMessagesByUser, sendMessage } from '../services/chatService';

/**
 * Controller function to send a new message to the chatroom.
 * @param req Express Request object.
 * @param res Express Response object.
 * @param next Express NextFunction.
 */
export const sendChatMessage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { content, author } = req.body;

  try {
    const message = await sendMessage(content, author);
    res.status(201).json({ message });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller function to fetch all messages from the chatroom.
 * @param req Express Request object.
 * @param res Express Response object.
 * @param next Express NextFunction.
 */
export const getAllMessages = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const messages = await getMessages();
    res.status(200).json({ messages });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller function to fetch messages from the chatroom by a specific user.
 * @param req Express Request object.
 * @param res Express Response object.
 * @param next Express NextFunction.
 */
export const getMessagesByUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.params.userId;

  try {
    const messages = await getMessagesByUser(userId);
    res.status(200).json({ messages });
  } catch (error) {
    next(error);
  }
};
