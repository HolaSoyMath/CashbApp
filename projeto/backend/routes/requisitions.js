
let express = require('express')
const router = express.Router()
const exec = require('./utils')
const bodyParser = require('body-parser')


let app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



//router.get('/', exec (async(req, res,next) => {}))

router.get('/login', exec (async(req, res,next) => {
    res.send("hello")
}))

router.use('/', require('./home'))

router.put('/alterar-senha', exec (async(req, res,next) => {
    res.send("hello")
}))

router.put('/dados-cadastrais', exec (async(req, res,next) => {
    res.send("hello")
}))

router.get('/ponteiras', exec (async(req, res,next) => {
    res.send("hello")
}))

router.post('/cash-back', exec (async(req, res,next) => {
    res.send("hello")
}))









//Export all routes to be used in another file
module.exports = router
