import { User } from '../entities/Users';

interface ICreateUsersDTO {
    name: string;
    email: string;
}
interface IUsersRepository {
    create({ name, email }: ICreateUsersDTO): void;
    findByName(name: string): User;
}

export { IUsersRepository, ICreateUsersDTO };
