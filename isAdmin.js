const isAdmin = async (req, res, next) => {
	const { user } = req;
	if (user.role_id !== 1) {
		const error = new Error('Unauthorized');
		return res.status(401).json({
			success: false,
			message: error.message,
			error,
		});
	}
	return next();
};

module.exports = isAdmin;
