const User = require('../models/User')

module.exports = (req, res) => {
    
    try {
        User.find().then((users) => {
            if (!users) return
            if (users) return res.render('users', { users })
        })
    } catch(err) {

    }

}