import { Router } from 'express';
import { body }   from 'express-validator';
import { submitForm } from '../controllers/formController.js';

const router = Router();

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
  ],
  submitForm
);

export default router;
