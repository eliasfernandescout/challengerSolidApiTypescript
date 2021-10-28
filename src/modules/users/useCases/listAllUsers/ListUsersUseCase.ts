import { User } from '../../entities/Users';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class ListUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute(): User[] {
        const users = this.usersRepository.list();
        console.log(users);
        return users;
    }
}

export { ListUsersUseCase };
