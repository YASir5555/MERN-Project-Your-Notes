import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import 'express-async-errors';
// db and authenticateUser
import connectDB from './db/connect.js';

//  routers
import authRouter from './routes/auth.js';
import notesRouter from './routes/notes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error.js';

app.use(express.json());
console.log('hello');

app.get('/', (req, res) => {
  res.json({ msg: 'Your Notes!' });
});

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/notes', notesRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = 5000; // process.env.PORT ||
console.log(port);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
