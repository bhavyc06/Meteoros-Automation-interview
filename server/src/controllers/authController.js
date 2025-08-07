import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import User from '../models/user.js';

const genToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

export const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email, password, phone } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ msg: 'Email already in use' });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash, phone });

    res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email },
      token: genToken(user._id)
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ msg: 'Invalid credentials' });

    res.json({
      user: { id: user._id, name: user.name, email: user.email },
      token: genToken(user._id)
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
