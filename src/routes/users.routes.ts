import { request, response, Router } from 'express';

import { createUserController } from '../modules/users/useCases/createUser';
import { listUsersController } from '../modules/users/useCases/listAllUsers';

const userRoutes = Router();

userRoutes.post('/', (request, response) => {
    return createUserController.handle(request, response);
});

userRoutes.get('/list', (request, response) => {
    return listUsersController.handle(request, response);
});

export { userRoutes };
