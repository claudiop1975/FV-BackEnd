
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize';

dotenv.config()

const { DB_URI} = process.env;

const sequelize = new Sequelize('postgres://vkcaappn:yZZqrGQKYKrKHzjZbWxKbfKv1ctPtfSu@silly.db.elephantsql.com/vkcaappn');
// Aca vendrian las relaciones




export default sequelize