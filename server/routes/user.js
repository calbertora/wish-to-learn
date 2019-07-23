const auth = require('../../auth/authController');
const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {

  console.log(req.body);
  
	const token = auth.sign({ test: 'test' });

	res.json({
		message: 'hello world test',
		token
	});
});

module.exports = router;