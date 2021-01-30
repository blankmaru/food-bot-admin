const Order = require('../models/Order')

module.exports = (req, res) => {
    Order.find().then((orders) => {
        if (!orders) return
        if (orders) return res.render('orders', { orders })
    })
}