const PromoCode = require('../models/PromoCode')

module.exports = (req, res) => {

    try {
        PromoCode.find().then((codes) => {
            if (!codes) return
            if (codes) return res.render('promo', { codes })
        })
    } catch(err) {

    }

}