import {
  IUserRepository,
  User,
  UserCreate,
} from '../interfaces/user.interface';
import { UserRepositoryPrisma } from '../repositories/user.repositories';

class UserUseCase {
  private userRepository: IUserRepository;
  constructor() {
    this.userRepository = new UserRepositoryPrisma();
  }

  async create({ name, email }: UserCreate): Promise<User> {}
}

export { UserUseCase };
