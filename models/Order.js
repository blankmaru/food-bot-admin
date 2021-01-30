const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    menuItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem'
    }],
    customerNumber: {
        type: String
    },
    customerAddress: {
        type: String
    },
    customerComment: {
        type: String
    },
    fullPrice: {
        type: Number
    },
    customerName: {
        type: String
    },
    methodOfPayment: {
        type: String
    },
    status: {
        type: String
    }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order