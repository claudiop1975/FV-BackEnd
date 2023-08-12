
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize';

dotenv.config()

const { DB_URI} = process.env;

const sequelize = new Sequelize(DB_URI);

// Aca vendrian las relaciones




export default sequelize