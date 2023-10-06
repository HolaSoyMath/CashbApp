let express = require('express')
const router = express.Router()
const exec = require('./utils')
const bodyParser = require('body-parser')


let app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



router.get('/points', exec (async(req, res,next) => {
    res.send("hello")
}))

router.get('/historico', exec (async(req, res,next) => {
    res.send("hello")
}))

router.get('/campanhas', exec (async(req, res,next) => {
    res.send("hello")
}))

//Export all routes to be used in another file
module.exports = router