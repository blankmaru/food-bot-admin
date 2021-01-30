const User = require('../models/User')

module.exports = (req, res) => {
    User.find().then((users) => {
        if (!users) return
        if (users) return res.render('users', { users })
    })
}