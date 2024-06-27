import mongoose, { Document, Schema } from 'mongoose';

export interface IBlogPost extends Document {
  _id: mongoose.Types.ObjectId; // Add id field
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  timestamps: true // Automatically manage createdAt and updatedAt
});

// Add logic to generate id
BlogPostSchema.virtual('id').get(function (this: { _id: mongoose.Types.ObjectId }) {
  return this._id.toHexString();
});

BlogPostSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc: any, ret: any) {
    delete ret._id;
    delete ret.__v;
  }
});

export default mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);
