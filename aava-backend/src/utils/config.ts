import dotenv from 'dotenv';
dotenv.config();

const getDatabaseUri = () => {
    const dbEnv = process.env.DATABASE_URL;
    if (dbEnv) {
        return dbEnv;
    }
    console.error('No DATABASE_URL provided. Set one in the .env file');
    process.exit(1);
}

export const PORT = process.env.PORT || 1337;
export const DATABASE_URL = getDatabaseUri();


