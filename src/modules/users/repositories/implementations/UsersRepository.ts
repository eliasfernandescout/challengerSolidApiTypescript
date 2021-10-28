import { User } from '../../entities/Users';
import { ICreateUsersDTO, IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
    private users: User[];

    constructor() {
        this.users = [];
    }

    create({ name, email }: ICreateUsersDTO): User {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            created_at: new Date(),
        });

        this.users.push(user);
        console.log(this.users);
        return user;
    }

    list(): User[] {
        console.log(this.users);
        return this.users;
    }

    findByName(name: string): User {
        const user = this.users.find(user => user.name === name);
        return user;
    }
}

export { UsersRepository };
