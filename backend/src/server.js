import express from 'express';
import notesRoute from './routes/notesRoute.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

connectDB();

app.use("/api/notes", notesRoute);

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});