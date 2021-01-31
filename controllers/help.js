const Message = require('../models/Message')

module.exports = (req, res) => {
    try {
        Message.find().then((messages) => {
            if (!messages) return
            if (messages) return res.render('help', { messages })
        })
    } catch(err) {

    }
}