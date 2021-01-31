const express = require('express');
const router = express.Router();

const userController = require('../controllers/users')
const orderController = require('../controllers/orders')
const orderStatusChangeById = require('../controllers/orderStatusChangeById')

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/help', (req, res) => {
    res.render('help');
});

router.get('/orders', orderController)
router.get('/users', userController);

router.post('/orderStatusChangeById/:id/:status', orderStatusChangeById)

module.exports = router;