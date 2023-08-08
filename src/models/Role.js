const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('role', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }
       
    }, { timestamps: false });
};