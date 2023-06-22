const express = require('express');
const { Users } = require('../models');

const router = express.Router();

router.post('/signup', async (req, res) => {
	try {
		const newUser = await Users.create({
			username: req.body.username,
			email: req.body.email,
			role_id: 1,
		});
		res.json({
			success: true,
			data: {
				user: newUser,
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
