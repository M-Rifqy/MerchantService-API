const db = require('../config/db') 

let deleteQuery = `DELETE FROM merchant WHERE id = ?`
let data = [10]
db.query(deleteQuery, data, function (err, deleted) {
  if (err) throw err;
  console.log(deleted);
});

let deleteQuery = `DELETE FROM product WHERE id = ?`
let data = [10]
db.query(deleteQuery, data, function (err, deleted) {
  if (err) throw err;
  console.log(deleted);
});
