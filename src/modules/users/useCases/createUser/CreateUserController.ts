import { Response, Request } from 'express';

import { CreateUserUseCase } from './CreaseUserUseCase';

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, email } = request.body;

        this.createUserUseCase.execute({ name, email });

        return response.status(201).json(this.createUserUseCase).send();
    }
}

export { CreateUserController };
