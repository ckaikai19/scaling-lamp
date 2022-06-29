const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Discussion extends Model {}

Discussion.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        discussion_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discussion_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discussion_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discussion_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'discussion',
    }
);

module.exports = Discussion;