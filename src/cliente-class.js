export default class cliente {

    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Olá tudo bem, meu nome é ${this.nome}!`)
    }

}