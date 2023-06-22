const express = require('express');
const { Dishes, Orders } = require('../models');
const isAuthenticated = require('../middlewares');

const router = express.Router();

router.use(isAuthenticated);

router.post('/', async (req, res) => {
	try {
		const { dishIds, fecha, timer } = req.body;
		const { user } = req;
		if (!dishIds) throw new Error('Tienes que pedir al menos un plato');
		if (!Array.isArray(dishIds)) throw new Error('dishIds debe ser un array');

		const dishesPromises = dishIds.map((dishId) => {
			return Dishes.findByPk(dishId);
		});
		const dishes = await Promise.all(dishesPromises);
		const validDishes = dishes.filter((dish) => dish !== null);

		const ordersPromises = validDishes.map((dish) => {
			return Orders.create({
				user_id: user.id,
				dish_id: dish.id,
				fecha,
				timer,
			});
		});
		const ordersCreated = await Promise.all(ordersPromises);

		return res.json({
			success: true,
			data: {
				order: ordersCreated,
			},
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
			error,
		});
	}
});

module.exports = router;
