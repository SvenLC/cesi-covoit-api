const users = [{ id: 1, name: 'Sven' }, { id: 2, name: 'Test' }];

export const fetchUsers = () => users;

export const createUser = (user) => {
  const id = users.length + 1;
  users.push({ id, ...user });

  return users[id - 1];
};

export const deleteUser = (id) => {
  const deletedUser = users[id -1];
  users.splice(id -1, 1);
  
  return deletedUser;
};