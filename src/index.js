import express from 'express';
import { userRouter } from './user/user-router.js';

const app = express();
app.use(express.json());

app.use('/users', userRouter);

app.get('/check', (req, res) => {
  res.status(200).json('Alive !');
});

app.listen(8080, () => {
  console.log(`Server running : ${new Date()} at port 8080`);
});
