import { User } from '../../entities/Users';
import { ICreateUsersDTO, IUsersRepository } from '../IUsersRepository';

class UserRepository implements IUsersRepository {
    private users: User[];

    constructor() {
        this.users = [];
    }
    create({ name, email }: ICreateUsersDTO): void {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            created_at: new Date(),
        });

        this.users.push(user);
    }
    findByName(name: string): User {
        const user = this.users.find(user => user.name === name);
        return user;
    }
}

export { UserRepository };
