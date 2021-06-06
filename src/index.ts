import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Utevo lux'));

app.listen(port, () => {
    console.log('Server started...');
});
