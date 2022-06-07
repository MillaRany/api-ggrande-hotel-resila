class DiariaDAO{
    constructor(bd){
        this.bd = bd;
    }
    listarDiarias(){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM DIARIAS`, (err, results) => {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })
    }
    listarDiariasId(id){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM DIARIAS WHERE ID=${id}`, (err, results) => {
                if(err){
                   reject(err)
                }else{
                   resolve(results)
                }
            })
        })

    }
    insereDiarias(NovaDiaria){
        return new Promise((resolve, reject) =>{
            this. bd.run(`INSERT INTO DIARIAS (ENTRADA, SAIDA, CHECKIN, CHECKOUT, ADULTO, CRIANCA) VALUES (?,?,?,?,?,?)`,
            [...Object.values(NovaDiaria)],(error)=>{
                if(error){
                   reject(error);
                }else{
                   resolve("INSERIDO COM SUCESSO!")
                }
            })
      
        })

    }
    altereDiarias(Parametros){
        return new Promise((resolve, reject) =>{
            this.bd.run(`UPDATE DIARIAS SET ENTRADA = ?, SAIDA = ?, CHECKIN = ?, CHECKOUT = ?, ADULTO = ?, CRIANCA = ? WHERE id = ?`, Parametros ,(error)=>{
            if(error){
                console.log(error)
               reject(error);
            }else{
               resolve("ALTERADO COM SUCESSO!")
            }
        })
    })

    }
    deleteDiarias(id){
        return new Promise((resolve, reject) =>{
            this.bd.run(`DELETE FROM DIARIAS WHERE ID = ${id}`,(error)=>{
                if(error){
                   reject(error);
                }else{
                   resolve("DELETADO COM SUCESSO!")
                }
            })
    })


    }

}

module.exports = DiariaDAO;