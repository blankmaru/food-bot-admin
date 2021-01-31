const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    telegram_id: {
        type: String
    },
    telegram_username: {
        type: String
    },
    type: {
        type: String
    }
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message