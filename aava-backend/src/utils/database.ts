import { Sequelize } from "sequelize";
import { DATABASE_URL } from "./config";

export const sequelize = new Sequelize(DATABASE_URL, { logging: false });

export const connectToDatabase = async () => {
    try {
      await sequelize.authenticate()
      console.log('Database connection has been established successfully.')
    } catch (err) {
      console.log('connecting database failed')
      return process.exit(1)
    }
    return null
}