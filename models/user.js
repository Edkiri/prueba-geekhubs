'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		static associate(models) {
			models.Users.belongsTo(models.Roles, {
				foreignKey: 'role_id',
			});
		}
	}
	Users.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Users',
			timestamps: false,
		}
	);
	return Users;
};
