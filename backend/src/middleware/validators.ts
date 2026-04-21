import { body, param } from 'express-validator';

export const validateCreateMessage = [
  body('owner')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Owner is required'),
  body('beneficiary')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Beneficiary is required'),
  body('message')
    .isString()
    .trim()
    .isLength({ min: 5, max: 280 })
    .withMessage('Message must be between 5 and 280 characters'),
  body('unlockDate')
    .isISO8601()
    .withMessage('unlockDate must be a valid ISO-8601 date'),
];

export const validateMessageId = [
  param('id').isInt({ min: 1 }).withMessage('Message id must be a positive integer'),
];
