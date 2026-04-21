import express from 'express';
import {
  addMessage,
  fetchMessageById,
  fetchMessages,
} from '../controllers/afterlifeController.js';
import {
  validateCreateMessage,
  validateMessageId,
} from '../middleware/validators.js';

const router = express.Router();

router.post('/', validateCreateMessage, addMessage);
router.get('/', fetchMessages);
router.get('/:id', validateMessageId, fetchMessageById);

export default router;
