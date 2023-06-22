const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
	return res.json({
		success: true,
		data: {
			message: 'Todo bien',
		},
	});
});

const PORT = process.env.PORT || 3000;
db.then(() => {
	// ...entonces levanto el servidor e informo al usuario de lo que está ocurriendo
	app.listen(PORT, () => {
		console.log(`Server running in port ${PORT}`);
	});
})
	// Si hay un error, informo al usuario
	.catch((error) => console.error(error.message));
