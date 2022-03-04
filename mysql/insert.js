const db = require('../config/db')

let dataMerchant = [{
		name: "Rifqy",
		password: "Rifqy123",
		phone_number: "08112345",
		address: "Jakarta"
	},
	{
		name: "Aisyah",
		password: "Aisyah123",
		phone_number: "08122345",
		address: "China"
	},
	{
		name: "Fathur",
		password: "Fathur123",
		phone_number: "08123345",
		address: "Sudan"
	}

]

dataMerchant.forEach((value) => {
	let insertQuery = `INSERT INTO merchant SET ?;`
	db.query(insertQuery, value, function (error) {
		if (error) throw error;
		console.log('Data has been inserted');
	});
});

let dataProduct = [{
		merchant_id: 1,
		name: "Mercedes-Benz AMG GT C Roadster",
		quantity: 1,
		price: "2.372.625,75"
	},
	{
		merchant_id: 2,
		name: "Mercedes-Benz SLR McLaren 722",
		quantity: 1,
		price: "43.138.950.000,00"
	},
	{
		merchant_id: 3,
		name: "Mercedes-Benz C Class C300 AMG Line",
		quantity: 5,
		price: "5.000.000.000"
	},
]

dataProduct.forEach((value) => {
	let insertQuery = `INSERT INTO product SET ?;`
	db.query(insertQuery, value, function (error) {
		if (error) throw error;
		console.log('Data has been inserted');
	});
});