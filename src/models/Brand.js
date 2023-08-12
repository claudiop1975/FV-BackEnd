import sequelize from "../db.js";
import {DataTypes} from 'sequelize'



export  const  Brand = sequelize.define('brand', {
    brand_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        brand_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
       
    }, { timestamps: false });



