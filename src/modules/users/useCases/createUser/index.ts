import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { CreateUserUseCase } from './CreaseUserUseCase';
import { CreateUserController } from './CreateUserController';

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
