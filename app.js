const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const User = require('../food-bot/src/models/User')
const app = express()

const keys = require('./config/keys')

mongoose.connect(keys.MongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('connect to db'))

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.use(express())
app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

const userController = require('./controllers/users')

const routes = require('./routes/index')

app.use('/', routes)

//app.get('/users', userController)
// app.get('/orders', orderController)
// app.get('/help', helpController)

const port = process.env.PORT || 3000

app.listen(port)