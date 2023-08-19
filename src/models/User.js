import sequelize from "../db.js";
import {DataTypes} from 'sequelize'
//import { encrypt } from '../utils/bcrypt.js';


export const User = sequelize.define('user', {
    user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
            /* set(pass){
                this.setDataValue('password', encrypt(pass))
            } */
        },
        user_phone:{
            type: DataTypes.STRING,
            allowNull: false,       
        },
    }, { timestamps: false });

 