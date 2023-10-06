
//app.js

let express = require('express')
let app = express()


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.use('/api', require('./routes/requisitions'))


//Teste de Erro
app.get('/teste_erro', function(req, res){
    throw new Error('Erro esperado')
})

//Rota não encontrada 404
app.use(function(req,res,next){

    let err = new Error('Não encontrado')
    err.status = 404
    next(err)
})
 
app.use(function(err,req,res,next){

    console.log(err.stack)
    res.status(500)
    res.json({erro: "Ocorreu um erro: " + err.message})
})




// inicia servidor
let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s",host,port)
})






