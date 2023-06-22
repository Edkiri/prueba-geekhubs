const express = require('express');
const { Dishes, Categories } = require('../models');
const isAdmin = require('../isAdmin');
const isAuthenticated = require('../middlewares');

const router = express.Router();

router.get('/', async (req, res) => {
	const { categoryId } = req.query;
	const query = {};

	if (categoryId) {
		query.categoy_id = categoryId;
	}

	try {
		const dishes = await Dishes.findAll({
			where: query,
			include: [{ model: Categories }],
		});
		res.json({
			success: true,
			data: {
				dishes,
			},
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'Algo salió mal',
			error: err,
		});
	}
});

router.get('/:dishName', async (req, res) => {
	const { dishName } = req.params;

	try {
		const dish = await Dishes.findOne({
			where: { dishname: dishName },
			include: [{ model: Categories }],
		});
		res.json({
			success: true,
			data: {
				dish,
			},
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'Algo salió mal',
			error: err,
		});
	}
});

router.use(isAuthenticated, isAdmin);

router.post('/', async (req, res) => {
	try {
		const newDish = await Dishes.create({
			dishname: req.body.dishname,
			categoy_id: req.body.categoryId,
		});
		res.json({
			success: true,
			data: {
				user: newDish,
			},
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'Algo salió mal',
			error: err,
		});
	}
});

module.exports = router;
