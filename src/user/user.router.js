import express from 'express';
import { getUsers, addUser, delUser } from './user.controller.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/', addUser);
userRouter.delete('/:id', delUser);

export default userRouter;

export { userRouter };
