import express from 'express';
import { userRouter } from './user/user.router.js';
import { carpoolingRouter } from './carpooling/carpooling.router.js';

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/carpoolings', carpoolingRouter);

app.get('/check', (req, res) => {
  res.status(200).json('Alive !');
});

app.listen(8080, () => {
  console.log(`Server running : ${new Date()} at port 8080`);
});
