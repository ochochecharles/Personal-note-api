import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import notesRoutes from './routes/notes.js';

dotenv.config(); // loads .env into process.env

const app = express();
app.use(express.json());
app.use('/notes', notesRoutes); // all /notes routes go to notesRoutes

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB connected');
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
})
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // stop the process if DB connection fails
});

