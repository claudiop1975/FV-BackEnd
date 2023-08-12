import sequelize from "../db.js";
import {DataTypes} from 'sequelize'


export const ProductType = sequelize.define('product_type', {
    product_type_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        product_type_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
       
    }, { timestamps: false });

  
