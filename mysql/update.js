const db = require('../config/db')

let updateQuery = `UPDATE product SET name = ?, quantity = ?, price = ? WHERE id = ?`
let data = ['Mercedes Benz S-Class', 3, '7.000.000.000']
db.query(updateQuery, data, function (err, updated) {
  if (err) throw err;
  console.log(updated);
});