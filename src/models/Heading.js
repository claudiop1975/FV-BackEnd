import sequelize from "../db.js";
import {DataTypes} from 'sequelize'


export const Heading = sequelize.define('heading', {
    heading_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        heading_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
       
    }, { timestamps: false });

