const jwt = require('jsonwebtoken');
const { Users } = require('./models');

const isAuthenticated = async (req, res, next) => {
	try {
		const bearerToken = req.headers.authorization;
		if (!bearerToken) throw new Error('Unauthorized');

		const token = bearerToken.split(' ')[1];
		const { userId } = jwt.verify(token, 'supersecreto');

		const user = await Users.findByPk(userId);
		if (!user) throw new Error('Unauthorized');

		req.user = user;
		return next();
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
			error,
		});
	}
};

module.exports = isAuthenticated;
