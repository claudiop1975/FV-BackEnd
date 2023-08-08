const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false
        }
       
    }, { timestamps: false });
};