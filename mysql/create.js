const db = require('../config/db.js')

let createQueryMerchant = `
CREATE TABLE IF NOT EXISTS merchant (
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    join_date DATETIME NOT NULL,
    phone_number INT(20) NOT NULL,
    createdAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
	updatedAt DATETIME NULL,
    PRIMARY KEY (id)
)
COLLATE='utf8mb4_general_ci'
;
`

db.query(createQueryMerchant, function (error) {
    if (error) throw error;
    console.log('Merchant table has been created');
});

let createQueryProduct = `
CREATE TABLE IF NOT EXISTS Product (
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    quantity INT(10) NOT NULL,
    price INT(10) NOT NULL,
	createdAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
	updatedAt DATETIME NULL,
    PRIMARY KEY (id)
)
COLLATE='utf8mb4_general_ci'
;
`

db.query(createQueryProduct, function (error) {
    if (error) throw error;
    console.log('Table has been created');
});
