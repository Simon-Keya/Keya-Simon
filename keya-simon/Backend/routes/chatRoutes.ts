import express from 'express';
import { getAllMessages, getMessagesByUserId, sendChatMessage } from '../controllers/chatController';

const router = express.Router();

// POST /api/chat/messages
router.post('/messages', sendChatMessage);

// GET /api/chat/messages
router.get('/messages', getAllMessages);

// GET /api/chat/messages/:userId
router.get('/messages/:userId', getMessagesByUserId);

export default router;
