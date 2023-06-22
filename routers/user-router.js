const express = require('express');
const { Users } = require('../models');
const jsonwebtoken = require('jsonwebtoken');

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

router.post('/login', async (req, res) => {
	try {
		const { email, username } = req.body;
		const userFound = await Users.findOne({
			where: {
				email,
			},
		});
		if (!userFound) {
			return res.json({
				success: true,
				message: 'Wrong credentials',
			});
		}
		const correctPassword = username === userFound.username;

		if (!correctPassword) {
			return res.json({
				success: true,
				message: 'Wrong credentials',
			});
		}

		const token = jsonwebtoken.sign(
			{
				userId: userFound.id,
				roleId: userFound.role_id,
				email: userFound.email,
			},
			'supersecreto',
			{
				expiresIn: '3h',
			}
		);

		return res.json({
			success: true,
			message: 'User logged in',
			token,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'user cant be logged',
			error,
		});
	}
});

module.exports = router;
