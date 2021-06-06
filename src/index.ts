import { addScore, getAllUsers } from './services/user';

import express from 'express';

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', async (req, res) => {
    const allUsers = await getAllUsers();
    res.json({ users: allUsers });
});

app.post('/add-score', async (req, res) => {
    const { localId, score } = req.body;
    const updatedUser = await addScore(localId, score);
    res.json({ scores: updatedUser.scores });
});

app.listen(port, () => {
    console.log('Server started...');
});
