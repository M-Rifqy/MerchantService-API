const express = require('express')

const loginRoute = require('../controllers/login_controller')
const merchantRoute = require('../controllers/merchant_controller')
const productRoute = require('../controllers/product_controller')

const authMiddleware = require('../middlewares/auth_middleware')

const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message: "Merchant Service"
    });
});

router.post('/login', loginRoute.login)

router.get('/merchant', authMiddleware.isAuthenticate, merchantRoute.listMerchant)
router.post('/merchant', authMiddleware.isAuthenticate, merchantRoute.insertMerchant)
router.put('/merchant/:id', authMiddleware.isAuthenticate, merchantRoute.updateMerchant)
router.delete('/merchant/:id', authMiddleware.isAuthenticate, merchantRoute.deleteMerchant)

router.get('/product', authMiddleware.isAuthenticate, productRoute.listProduct)
router.post('/product', authMiddleware.isAuthenticate, productRoute.insertProduct)
router.put('/product/:id', authMiddleware.isAuthenticate, productRoute.updateProduct)
router.delete('/product/:id', authMiddleware.isAuthenticate, productRoute.deleteProduct)

module.exports = router