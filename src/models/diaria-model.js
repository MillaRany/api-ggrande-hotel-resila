class Diaria{
    constructor( entrada , saida , checkin , checkout , adulto , crianca ){
        this.entrada = this.verificarEntrada(entrada);
        this.saida = saida;
        this.checkin = checkin;
        this.checkout = checkout;
        this.adulto = adulto;
        this.crianca = crianca;
    }
    verificarEntrada(entrada){ 
        if(entrada.length <= 10){
            return entrada
        }else{
            throw new Error("Use o formato 00/00/0000")
        }
    }
}
module.exports = Diaria;