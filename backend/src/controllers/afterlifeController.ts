import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { createMessage, getMessages } from '../services/afterlifeService.js';

export const addMessage = (req: Request, res: Response): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { owner, beneficiary, message, unlockDate } = req.body;

  const createdMessage = createMessage(
    owner,
    beneficiary,
    message,
    unlockDate
  );

  res.status(201).json(createdMessage);
};

export const fetchMessages = (_req: Request, res: Response): void => {
  res.status(200).json(getMessages());
};