const express = require('express');
const router = express.Router();

const userController = require('../controllers/users')
const orderController = require('../controllers/orders')
const helpController = require('../controllers/help')
const promoController = require('../controllers/promo')

const orderStatusChangeById = require('../controllers/orderStatusChangeById')

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/promo', promoController)
router.get('/help', helpController)
router.get('/orders', orderController)
router.get('/users', userController);

router.post('/orderStatusChangeById/:id/:status', orderStatusChangeById)

module.exports = router;