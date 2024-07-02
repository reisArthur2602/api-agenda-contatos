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

  async create(data: UserCreate): Promise<User> {
    const user = await this.userRepository.create(data);

    return user;
  }
}

export { UserUseCase };
