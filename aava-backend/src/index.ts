import express from 'express';
import { PORT } from './utils/config';
import { connectToDatabase } from './utils/database';
import applicantRouter from './routers/applicantRouter';
import { Applicant, JobExperience } from './models';
import companyRouter from './routers/companyRouter';

const app = express();

app.use(express.json());
app.use('/applicants', applicantRouter)
app.use('/companies', companyRouter)

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