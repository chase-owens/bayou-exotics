import bcrypt from "bcryptjs";

import s3, { Keys } from "../aws/aws-exports";
import createId from "./utils/createId";

export interface User {
  id: string;
  isAdmin: boolean;
  passwordHash: string;
  username: string;
}

type UserLoginForm = {
  username: string;
  password: string;
  isAdmin?: boolean;
};

type UserLoginErrors = { username: string; password: string };

export const login = async ({ username, password }: UserLoginForm) => {
  const users = await getUsers();

  const user = users.find((user) => user.username === username);

  const errors: UserLoginErrors = {
    username: "",
    password: "",
  };

  if (!user) {
    errors.username = "Username not found";
    return { errors };
  }

  const isCorrectPassword = bcrypt.compare(password, user.passwordHash);

  if (!isCorrectPassword) {
    errors.password = "Password is incorrect";
    return { errors };
  }

  return { errors, user };
};

export const register = async ({
  username,
  password,
  isAdmin,
}: UserLoginForm) => {
  const users = await getUsers();

  const existingUser = users.find((user) => user.username === username);

  const errors: UserLoginErrors = {
    username: "",
    password: "",
  };

  if (existingUser) {
    errors.username = "Username already exists";
    return { errors };
  }

  const passwordHash = await bcrypt.hash(password, 8);
  const id = createId();

  const user: User = {
    id,
    isAdmin: !!isAdmin,
    passwordHash,
    username,
  };

  users.push(user);

  const minifiedUsers = JSON.stringify(users);

  await s3
    .putObject({
      Bucket: "bayou-exotics",
      Key: Keys.User,
      Body: minifiedUsers,
    })
    .promise()
    .catch(() => console.log(`Error adding ${user}`));

  return { errors, user };
};

export const getUsers = async () => {
  const data = await s3
    .getObject({
      Bucket: "bayou-exotics",
      Key: Keys.User,
    })
    .promise()
    .then((data) => data)
    .catch((error) => {
      console.log(`Error fetching assets path", ${error.message}`);
    });

  if (!data || !data.Body) {
    throw new Error(`${Keys.User} has no Body`);
  }

  const userData = data.Body.toString();

  const users: User[] = JSON.parse(userData);

  return users;
};

export const getUser = async (userId: string) => {
  const users = await getUsers();
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return null;
  }

  return user;
};

export const getUserCount = async () => {
  const users = await getUsers();
  return users.length;
};
