import bcrypt from 'bcryptjs';

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    },
    {
    name: "Husnam Ilyas",
    email: "husnam@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    },
    {
    name: "Ali Husnain",
    email: "ali@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    }
];

export default users;