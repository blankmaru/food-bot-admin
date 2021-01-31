const Message = require('../models/Message')

module.exports = (req, res) => {
    Message.find().then((messages) => {
        if (!messages) return
        if (messages) return res.render('help', { messages })
    }).catch((err) => console.log(err))
}