'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Categories extends Model {
		static associate() {}
	}
	Categories.init(
		{
			categoryname: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Categories',
			timestamps: false,
		}
	);
	return Categories;
};
