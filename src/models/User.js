const { DataTypes } = require('sequelize');
const {encrypt}= require('../utils/bcrypt.js')


module.exports = (sequelize) => {
    sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(pass){
                this.setDataValue('password', encrypt(pass))
            }
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false,       
        },
    }, { timestamps: false });
};