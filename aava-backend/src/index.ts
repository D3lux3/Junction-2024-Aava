import express from 'express';
import { PORT } from './utils/config';
import { connectToDatabase } from './utils/database';
import applicantRouter from './routers/applicantRouter';
import companyRouter from './routers/companyRouter';
import { getCompanyDistances } from './db';

const app = express();

app.use(express.json());
app.use('/applicants', applicantRouter)
app.use('/companies', companyRouter)

app.get('/', async (req, res) => {
    console.log(await getCompanyDistances("123"));
    res.send('Hello World!');
})

const start = async () => {
    await connectToDatabase();
    app.listen(PORT, () => {
        console.log('Server is running on port 🚀', PORT);
    });
}

start();