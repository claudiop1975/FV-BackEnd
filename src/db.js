
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize';

dotenv.config()

const { DB_URI} = process.env;

const sequelize = new Sequelize('fv', 'postgres', '1', {
    host: 'localhost',
    dialect: "postgres"
  });






export default sequelize