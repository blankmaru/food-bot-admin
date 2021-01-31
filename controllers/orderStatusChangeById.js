const Order = require('../models/Order')

module.exports = (req, res) => {

    let parseId = req.params.id
    
    Order.findById(parseId).then(async (doc) => {
        doc.status = req.params.status

        await doc.save()
    })
    .then(() => res.redirect('/orders'))
    .catch((err) => console.error(err))

}