import Message, { IMessage } from '../models/Message';

/**
 * Sends a new message to the chatroom.
 * @param content The content of the message.
 * @param author The ID of the message author (user).
 * @returns Promise<IMessage> The saved message.
 */
export const sendMessage = async (content: string, author: string): Promise<IMessage> => {
  try {
    const message = new Message({
      content,
      author,
      createdAt: new Date(),
    });

    await message.save();
    return message;
  } catch (error: any) {
    throw new Error(`Failed to send message: ${error.message}`);
  }
};

/**
 * Retrieves all messages from the chatroom.
 * @returns Promise<IMessage[]> Array of messages.
 */
export const getMessages = async (): Promise<IMessage[]> => {
  try {
    const messages = await Message.find().populate('author', '_id username').exec();
    return messages;
  } catch (error: any) {
    throw new Error(`Failed to fetch messages: ${error.message}`);
  }
};

/**
 * Retrieves all messages from a specific user in the chatroom.
 * @param userId The ID of the user whose messages to retrieve.
 * @returns Promise<IMessage[]> Array of messages from the user.
 */
export const getMessagesByUser = async (userId: string): Promise<IMessage[]> => {
  try {
    const messages = await Message.find({ author: userId }).populate('author', '_id username').exec();
    return messages;
  } catch (error: any) {
    throw new Error(`Failed to fetch messages for user ${userId}: ${error.message}`);
  }
};
