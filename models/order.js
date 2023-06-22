'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Orders extends Model {
		static associate(models) {
			models.Orders.belongsTo(models.Users, {
				foreignKey: 'user_id',
			});
			models.Orders.belongsTo(models.Dishes, {
				foreignKey: 'dish_id',
			});
		}
	}
	Orders.init(
		{
			fecha: DataTypes.DATE,
			timer: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'Orders',
			timestamps: false,
		}
	);
	return Orders;
};
