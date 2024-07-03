import Comment, { IComment } from '../models/Comment';

// Function to create a new comment
export async function createComment(comment: IComment): Promise<IComment> {
  try {
    const newComment = await Comment.create(comment);
    return newComment;
  } catch (error: any) { // Explicitly typing error as any
    throw new Error(`Error creating comment: ${error.message}`);
  }
}

// Function to get all comments
export async function getAllComments(): Promise<IComment[]> {
  try {
    const comments = await Comment.find().populate('author').populate('blogPost').exec();
    return comments;
  } catch (error: any) { // Explicitly typing error as any
    throw new Error(`Error fetching comments: ${error.message}`);
  }
}

// Function to get a comment by its ID
export async function getCommentById(commentId: string): Promise<IComment | null> {
  try {
    const comment = await Comment.findById(commentId).populate('author').populate('blogPost').exec();
    return comment;
  } catch (error: any) { // Explicitly typing error as any
    throw new Error(`Error fetching comment: ${error.message}`);
  }
}

// Function to update a comment by its ID
export async function updateComment(commentId: string, updatedComment: Partial<IComment>): Promise<IComment | null> {
  try {
    const comment = await Comment.findByIdAndUpdate(commentId, updatedComment, { new: true }).exec();
    return comment;
  } catch (error: any) { // Explicitly typing error as any
    throw new Error(`Error updating comment: ${error.message}`);
  }
}

// Function to delete a comment by its ID
export async function deleteComment(commentId: string): Promise<void> {
  try {
    await Comment.findByIdAndDelete(commentId).exec();
  } catch (error: any) { // Explicitly typing error as any
    throw new Error(`Error deleting comment: ${error.message}`);
  }
}
