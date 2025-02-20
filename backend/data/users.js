import bcrypt from 'bcrypt'

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Loti',
    email: 'loti@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Babaloti',
    email: 'babaloti@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;