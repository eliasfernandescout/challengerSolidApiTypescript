import { User } from '../entities/Users';

interface ICreateUsersDTO {
    name: string;
    email: string;
}
interface IUsersRepository {
    findByName(name: string): User;
    list(): User[];
    create({ name, email }: ICreateUsersDTO): User;
}

export { IUsersRepository, ICreateUsersDTO };
