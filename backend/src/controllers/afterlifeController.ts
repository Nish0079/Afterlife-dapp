import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import {
  createMessage,
  getMessageById,
  getMessages,
} from '../services/afterlifeService.js';

export const addMessage = (req: Request, res: Response): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const createdMessage = createMessage(req.body as CreateAfterLifeMessageInput);
  res.status(201).json(createdMessage);
};

export const fetchMessages = (_req: Request, res: Response): void => {
  res.status(200).json(getMessages());
};

export const fetchMessageById = (req: Request, res: Response): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const id = Number(req.params.id);
  const message = getMessageById(id);

  if (!message) {
    res.status(404).json({ error: 'Message not found' });
    return;
  }

  res.status(200).json(message);
};
