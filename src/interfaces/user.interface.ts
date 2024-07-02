export interface User {
  id: string;
  email: string;
  name: string;
}

export interface UserCreate {
  email: string;
  name: string;
}

export interface IUserRepository {
  create(data: UserCreate ): Promise<User>;
}
