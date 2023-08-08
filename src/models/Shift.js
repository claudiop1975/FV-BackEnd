const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('shift', {
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
        start:{
            type:DataTypes.TIME,
            allowNull: false,
        },
        end:{
            type:DataTypes.TIME,
            allowNull: false,
        }
       
    }, { timestamps: false });
};