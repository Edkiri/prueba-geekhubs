'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Roles extends Model {
		static associate(models) {
			models.Roles.hasOne(models.Users, {
				foreignKey: 'role_id',
			});
		}
	}
	Roles.init(
		{
			rolename: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Roles',
			timestamps: false,
		}
	);
	return Roles;
};
