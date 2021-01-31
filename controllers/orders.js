const Order = require('../models/Order')

module.exports = (req, res) => {
    try {
        Order.find().then((orders) => {
            if (!orders) return
            if (orders) return res.render('orders', { orders })
        })
    } catch(err) {

    }
}