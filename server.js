
// server.js (ESM)
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from the repo root
app.use(express.static(__dirname));

// Optional: SPA-style fallback to index.html (safe even if you’re not using SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`SECO Service Portal listening on port ${PORT}`);
});
