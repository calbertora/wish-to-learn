const jwt = require('jsonwebtoken');

const sign = tokenData => {
  return jwt.sign(tokenData, 'test-secret-key', {
    expiresIn: 30 // 1 minute
  });
}

const verify = (tokenData, send) => {
  jwt.verify(tokenData, 'test-secret-key', (err, decoded) => {
    if(err) {
      console.log('err ' + err);
      send(err);
    } else {
      send(decoded);
    }
  });
}

module.exports = {
  sign,
  verify
}