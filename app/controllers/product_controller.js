const db = require('../../config/db') 

function insertProduct(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO merchant SET ?;`
    db.query(insertQuery, dataProduct, function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
}

async function listProduct(req, res) {
    let selectQuery = `SELECT * FROM merchant`

    let result = await db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
    });
    res.send({ message: 'Data is found', data: results })
}

function updateProduct(req, res) {
    let updateQuery = `UPDATE merchant SET ? WHERE id = ?`
    let data = [req.body, req.params.id]  
    
    db.query(updateQuery, data, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been updated', data: req.body })
}

function deleteProduct(req, res) {
    let deleteQuery = `DELETE FROM merchant WHERE id = ?`
    let data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertProduct,
    listProduct,
    updateProduct,
    deleteProduct
}