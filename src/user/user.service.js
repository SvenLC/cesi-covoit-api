import { User } from './user.model.js';

const users = [{ id: 1, email: 'sven@viacesi.fr', pwd: 'ALED' }, { id: 2, email: 'test@viacesi.fr', pwd: 'TEST' }];

export const fetchUsers = () => {
  return User.find();
};

export const createUser = async (user) => {

  const newUser = new User ({ ...user });

  return newUser.save();
};

export const updateUser = async (id, user) => {
  return User.findByIdAndUpdate(id, { ...user }, { new: true });
}

export const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};