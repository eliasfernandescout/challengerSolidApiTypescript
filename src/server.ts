import express, { Router } from 'express';

import { router } from './routes';

const app = express();
app.use(express.json());
app.use(router);

app.listen(5002, () => {
    console.log('SERVER STARTED ON PORT 5002');
});
