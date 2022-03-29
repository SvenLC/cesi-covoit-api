import express from 'express';
import { getUsers, addUser } from './user.controller.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/', addUser);

export default userRouter;

export { userRouter };
