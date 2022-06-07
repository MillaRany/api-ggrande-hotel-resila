const express = require('express');
const app = express();
//importando controller
const diaria = require('./controllers/diaria-controller.js')
//importando BD
const bd = require('./infra/sqlite-db.js')

//body-parser
app.use(express.json())

//chamando controller e passando o express
diaria(app, bd)



app.listen(3000, ()=>{
    console.log("rodando na porta 3000")
}) 