import { fetchUsers, createUser, updateUser, deleteUser } from './user.service.js';

export const getUsers = async (req, res, next) => {
  try {
    const result = await fetchUsers();
    res.status(200).json(result);

  } catch (error) {
    next(error);
  }
};

export const addUser = async (req, res, next) => {
  const { body } = req;

  try {
    const addedUser = await createUser(body);
    res.status(200).json(addedUser);

  } catch (error) {
    next(error);
  }
};

export const patchUser = async (req, res, next) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const updatedUser = await updateUser(id, body);
    res.status(200).json(updatedUser);

  } catch (error) {
    next(error);
  }
};

export const delUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedUser = await deleteUser(id);
    res.status(200).json(deletedUser);

  } catch (error) {
    next(error);
  }
};
