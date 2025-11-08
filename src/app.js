import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';

// require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.get('/health', (_req, res) => res.json({ ok: true }));

const port = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(port, () => console.log(`Server running on :${port}`));
});