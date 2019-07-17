const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

const connect = MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }

  const dbo = db.db('wish');
  console.log('Connected to wish!!');
  dbo.createCollection('users', (err, res) => {
    if (err) {
      throw err;
    }
    console.log('Collection user created !!');
    db.close();
  })
});

module.exports = {
  connect
}
