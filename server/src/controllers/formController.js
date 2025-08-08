import { validationResult } from 'express-validator';
import Lead from '../models/Lead.js';

export const submitForm = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const lead = await Lead.create(req.body);   // ⇦ persists to Mongo
    res.status(201).json({ msg: 'Lead captured', lead });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
