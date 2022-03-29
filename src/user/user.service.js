const users = [{ id: 1, name: 'sven' }];

export const fetchUsers = () => users;

export const createUser = (user) => {
  const id = users.length + 1;
  users.push({ id, ...user });

  return users[id - 1];
};
