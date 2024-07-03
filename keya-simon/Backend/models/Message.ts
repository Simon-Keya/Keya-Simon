import { Document, Schema, model } from 'mongoose';
import { IUser } from './User';

export interface IMessage extends Document {
  content: string;
  author: IUser['_id'];
  createdAt: Date;
}

const messageSchema = new Schema<IMessage>({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = model<IMessage>('Message', messageSchema);

export default Message;
