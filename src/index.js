import express from 'express';
import { userRouter } from './user/user-router.js';

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/cesi-covoit');

mongoose.connection.on('connected', () => {
  console.log('Connected to mongodb');
});

const app = express();
app.use(express.json());

app.use('/users', userRouter);

app.get('/check', (req, res) => {
  res.status(200).json('Alive !');
});

app.listen(8080, () => {
  console.log(`Server running : ${new Date()} at port 8080`);
});
