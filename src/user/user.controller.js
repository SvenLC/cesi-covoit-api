import { fetchUsers, createUser, deleteUser } from './user.service.js';

export const getUsers = async (req, res, next) => {
  try {
    const result = fetchUsers();
    res.status(200).json(result);

  } catch (error) {
    next(error);
  }
};

export const addUser = async (req, res, next) => {
  const { body } = req;

  try {
    const addedUser = createUser(body);
    res.status(200).json(addedUser);

  } catch (error) {
    next(error);
  }
};

export const delUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedUser = deleteUser(id);
    res.status(200).json(deletedUser);

  } catch (error) {
    next(error);
  }
};