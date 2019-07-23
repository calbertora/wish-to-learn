const bodyParser = require('body-parser');
const auth = require('../auth/authController');
const express = require('express');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
const userRoute = require('./routes/user');
app.use('/api/user',userRoute);

const port = 3000;

app.get('/', (req, res) => {

	const token = auth.sign({ test: 'test' });

	res.json({
		message: 'hello world test',
		token
	});
});

app.get('/index', (req, res, next) => {

	const token = req.headers['authorization'];

	auth.verify(token, (athorized) => {

		res.json({
			message: athorized
		});
	});

});

app.listen(port, () => {
	console.log(`Express running on port ${port}`);
});

module.exports = app;