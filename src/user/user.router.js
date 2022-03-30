import express from 'express';
import { getUsers, addUser, patchUser, delUser } from './user.controller.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/', addUser);
userRouter.patch('/:id', patchUser)
userRouter.delete('/:id', delUser);

export default userRouter;

export { userRouter };
