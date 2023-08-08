const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('client', {
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
        address:{
            type: DataTypes.STRING,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: false });
};