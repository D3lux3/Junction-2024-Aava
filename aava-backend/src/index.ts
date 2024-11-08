import express from 'express';
import { PORT } from './utils/config';
import { connectToDatabase } from './utils/database';

const app = express();



app.get('/', (req, res) => {
    res.send('Hello World!');
})

const start = async () => {
    await connectToDatabase();
    app.listen(PORT, () => {
        console.log('Server is running on port 🚀', PORT);
    });
}

start();