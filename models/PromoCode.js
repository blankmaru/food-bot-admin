const mongoose = require('mongoose')

const promoCodeSchema = new mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    code: String
})

const PromoCode = mongoose.model('PromoCode', promoCodeSchema)

module.exports = PromoCode