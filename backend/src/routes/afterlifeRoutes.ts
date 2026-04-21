import express from 'express';
import { addMessage, fetchMessages } from '../controllers/afterlifeController.js';
import { validateMessage } from '../middleware/validators.js';

const router = express.Router();

router.post('/', validateMessage, addMessage);
router.get('/', fetchMessages);

export default router;