import { Router } from 'express';
import { submitForm } from '../controllers/formController.js';

const router = Router();

router.post('/', submitForm);

export default router;
