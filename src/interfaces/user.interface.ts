export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreate {
  email: string;
  name: string;
}

export interface IUserRepository {
  create(data: UserCreate): Promise<User>;
  findById(data: Pick<User, 'id'>): Promise<User | null>;
}
