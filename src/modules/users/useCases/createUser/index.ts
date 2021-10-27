import { UserRepository } from '../../repositories/implementations/UsersRepository';
import { CreateUserUseCase } from './CreaseUserUseCase';
import { CreateUserController } from './CreateUserController';

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
