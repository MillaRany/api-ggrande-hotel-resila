//DIARIAS - CRUD 
const Diaria = require('../models/diaria-model.js')
const DiariaDAO = require('../DAO/diaria-dao.js')


const diaria = (app,bd)=>{
    const DAODiaria = new DiariaDAO(bd)
    //CREATE DO CRUD - INSERIR REGISTROS
    app.post('/diaria', (req, res) => {
        const body = req.body
        console.log(req.body)
        const DiariaDado = new Diaria(...Object.values(body))
        const data = async() => {
            try {
                
                const diarias =  await DAODiaria.insereDiarias(DiariaDado)
                res.send(diarias)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
     })
    // READ DO CRUD E EXIBE REGISTROS
    app.get('/diaria', (req, res) => {
        const data = async() => {
            try {
                const diarias =  await DAODiaria.listarDiarias()
                res.send(diarias)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
     
    })
        // READ DO CRUD E EXIBE REGISTROS
        app.get('/diaria/:id', (req, res) => {
            const data = async() => {
                try {
                    const diarias =  await DAODiaria.listarDiariasId(req.params.id);
                    res.send(diarias)
                }catch(err) {
                    res.send(err)
                }
               
            }
            data()
           })  
    //UPDATE DO CRUD - ATUALIZAR REGISTROS
    app.put('/diaria/:id', (req, res) => {
        const body = req.body;

        const id = req.params.id
        const data = async() => {
            try {
                const diariasDado = await DAODiaria.listarDiariasId(id);
                const DiariaDado = new Diaria(body.ENTRADA || diariasDado[0].ENTRADA, 
                    body.SAIDA|| diariasDado[0].SAIDA, 
                    body.CHECKIN || diariasDado[0].CHECKIN,
                    body.CHECKOUT || diariasDado[0].CHECKOUT,
                    body.ADULTO || diariasDado[0].ADULTO,
                    body.CRIANCA || diariasDado[0].CRIANCA )
                const parametros = [DiariaDado.entrada, DiariaDado.saida, DiariaDado.checkin, DiariaDado.checkout, DiariaDado.adulto, DiariaDado.crianca, id]
                const diarias =  await DAODiaria.altereDiarias(parametros)
                res.send(diarias)
            }catch(err) {
                res.send(err)
            }
           
        }

        data()

      
    })

    app.delete('/diaria/:id', (req, res) => {
        const data = async() => {
            try {
                const diarias =  await DAODiaria.deleteDiarias(req.params.id)
                res.send(diarias)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
        
    })
} 

module.exports = diaria;