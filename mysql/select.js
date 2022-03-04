const db = require('../config/db')

const selectQuery = `SELECT * FROM merchant`
db.query(selectQuery, function (error, results) {
  if (error) throw error;
  console.log('Merchant List: ', results);
});

const selectQuery = `SELECT * FROM product`
db.query(selectQuery, function (error, results) {
  if (error) throw error;
  console.log('Product List: ', results);
});