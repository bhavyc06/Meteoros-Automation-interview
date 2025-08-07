import path from 'path';
import { fileURLToPath } from 'url';
/* …existing imports… */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

/* existing app.use(cors/json/routes) … */

if (process.env.NODE_ENV === 'production') {
  const dist = path.join(__dirname, '..', 'dist');
  app.use(express.static(dist));

  // SPA fallback → index.html
  app.get('*', (_, res) => res.sendFile(path.join(dist, 'index.html')));
}

export default app;
