import sequelize from "../db.js";
import {DataTypes} from 'sequelize'



 export const Category =   sequelize.define('category', {
    category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
       
    }, { timestamps: false });
