'use strict';
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@metropolia.fi',
    password: '1234',
  },
  {
    id: '2',
    name: 'Jane Doez',
    email: 'jane@metropolia.fi',
    password: 'qwer',
  },
];

//TODO tee funktio joka plauttaa yhden userin idn perusteella
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

module.exports = {
  users,
  getUser,
};
