import { Request, Response } from 'express';
import { IComment } from '../models/Comment';
import * as commentService from '../services/commentService';

// Controller function to handle creating a new comment
export async function createComment(req: Request, res: Response): Promise<void> {
  try {
    const newComment: IComment = req.body;
    const createdComment = await commentService.createComment(newComment);
    res.status(201).json(createdComment);
  } catch (error: any) { // Explicitly typing error as any
    res.status(500).json({ message: error.message });
  }
}

// Controller function to handle fetching all comments
export async function getAllComments(req: Request, res: Response): Promise<void> {
  try {
    const comments = await commentService.getAllComments();
    res.status(200).json(comments);
  } catch (error: any) { // Explicitly typing error as any
    res.status(500).json({ message: error.message });
  }
}

// Controller function to handle fetching a comment by its ID
export async function getCommentById(req: Request, res: Response): Promise<void> {
  try {
    const commentId: string = req.params.id;
    const comment = await commentService.getCommentById(commentId);
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error: any) { // Explicitly typing error as any
    res.status(500).json({ message: error.message });
  }
}

// Controller function to handle updating a comment by its ID
export async function updateComment(req: Request, res: Response): Promise<void> {
  try {
    const commentId: string = req.params.id;
    const updatedComment: Partial<IComment> = req.body;
    const comment = await commentService.updateComment(commentId, updatedComment);
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error: any) { // Explicitly typing error as any
    res.status(500).json({ message: error.message });
  }
}

// Controller function to handle deleting a comment by its ID
export async function deleteComment(req: Request, res: Response): Promise<void> {
  try {
    const commentId: string = req.params.id;
    await commentService.deleteComment(commentId);
    res.status(204).end();
  } catch (error: any) { // Explicitly typing error as any
    res.status(500).json({ message: error.message });
  }
}
