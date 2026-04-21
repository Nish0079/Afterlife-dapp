import { body } from 'express-validator';

export const validateMessage = [
  body('owner').notEmpty().withMessage('Owner required'),
  body('beneficiary').notEmpty().withMessage('Beneficiary required'),
  body('message').notEmpty().withMessage('Message required'),
  body('unlockDate').isISO8601().withMessage('Invalid date'),
];