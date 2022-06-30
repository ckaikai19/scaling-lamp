// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Member extends Model {}

// Member.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     member_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     member_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'project',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'member',
//   }
// );

// module.exports = Member;