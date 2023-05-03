import { AppDataSource } from "app/data-source";
import { User } from "app/entities/user.entity";

export const list = async (): Promise<User[]> => {
  const userRepoistory = AppDataSource.getRepository(User);

  return userRepoistory.find();
};

export const create = async (): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create({ name: "Hubert" });
  await userRepository.save(user);

  return user;
};
