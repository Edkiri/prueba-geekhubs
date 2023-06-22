'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Dishes extends Model {
		static associate(models) {
			models.Dishes.belongsTo(models.Categories, {
				foreignKey: 'categoy_id',
			});
		}
	}
	Dishes.init(
		{
			dishname: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Dishes',
			timestamps: false,
		}
	);
	return Dishes;
};
