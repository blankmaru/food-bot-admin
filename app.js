const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

const keys = require('./config/keys')

mongoose.connect(process.env.MONGO_URI || keys.MongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('connect to db'))
.catch(err => {
    console.log(err);
});

console.log("Database_URL", process.env.MONGO_URI);

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.use(express())
app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

const routes = require('./routes/index')

app.use('/', routes)

const port = process.env.PORT || 3000

app.listen(port)