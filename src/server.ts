import express from 'express';

const app = express();
app.use(express.json());

app.listen(5002, () => {
    console.log('SERVER STARTED ON PORT 5002');
});
