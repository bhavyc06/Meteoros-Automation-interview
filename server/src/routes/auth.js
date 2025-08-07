import { Router } from 'express';
import { body } from 'express-validator';
import { signup, login } from '../controllers/authController.js';

const router = Router();

router.post(
  '/signup',
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
  ],
  signup
);

router.post('/login', login);

export default router;
