import express from 'express';
import cors    from 'cors';
import path    from 'path';
import { fileURLToPath } from 'url';
import authRoutes  from './routes/auth.js';
import formRoutes  from './routes/form.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

/* ──────────────── global middleware ──────────────── */
app.use(cors());
app.use(express.json());

/* ──────────────── API routes ─────────────────────── */
app.use('/api/auth', authRoutes);
app.use('/api/form', formRoutes);

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

/* ──────────────── serve React in production ──────── */
if (process.env.NODE_ENV === 'production') {
  const dist = path.join(__dirname, '..', 'dist');
  app.use(express.static(dist));
  app.get('*', (_, res) => res.sendFile(path.join(dist, 'index.html')));
}

export default app;
