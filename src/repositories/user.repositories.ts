import { db } from '../database/prisma';
import {
  IUserRepository,
  User,
  UserCreate,
} from '../interfaces/user.interface';

class UserRepositoryPrisma implements IUserRepository {
  async create(data: UserCreate): Promise<User> {
    const user = await db.user.create({ data });
    return user;
  }
  async findById(data: Pick<User, 'id'>): Promise<User | null> {
    return await db.user.findUnique({ where: { id: data.id } });
  }
}

export { UserRepositoryPrisma };
