import { Document, Schema, model } from 'mongoose';
import { IBlogPost } from './Post';
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
    type: Schema.Types.ObjectId, // Use Schema.Types.ObjectId instead of Types.ObjectId
    ref: 'User',
    required: true,
  },
  blogPost: {
    type: Schema.Types.ObjectId, // Corrected reference to blogPost
    ref: 'Post',
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
commentSchema.pre<IComment>('save', function (next) {
  this.updatedAt = new Date();
  next();
});

// Create the Comment model using the schema
const Comment = model<IComment>('Comment', commentSchema);

export default Comment;
