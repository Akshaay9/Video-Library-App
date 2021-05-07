import bcrypt from "bcryptjs";
export const usersList = [
  {
    name: "akshay",
    email: "akshay@gmail.com",
    password: bcrypt.hashSync("Akshay98#", 10),
  },
    {
        name: "test",
        email: "test98@gmail.com",
        password: bcrypt.hashSync("Test98#", 10),
  },
];
