import { User } from '../../entities/Users';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    name: string;
    email: string;
}
class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ name, email }: IRequest): User {
        const userAlreadyExists = this.usersRepository.findByName(name);

        if (userAlreadyExists) {
            throw new Error('User already exists!');
        }

        const user = this.usersRepository.create({ name, email });
        return user;
    }
}

export { CreateUserUseCase };
