import { Document, Schema, Types, model } from 'mongoose';
import { IBlogPost } from './BlogPost';
import { IUser } from './User';

// Define the IComment interface extending from Document
export interface IComment extends Document {
  content: string;
  author: IUser['_id'];
  blogPost: IBlogPost['_id'];
  createdAt: Date;
  updatedAt: Date;
}

// Define the Comment schema
const commentSchema = new Schema<IComment>({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  blogPost: {
    type: Types.ObjectId,
    ref: 'BlogPost',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the updatedAt field on document save
commentSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

// Create the Comment model using the schema
const Comment = model<IComment>('Comment', commentSchema);

export default Comment;
