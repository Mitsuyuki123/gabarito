export class Candidato{
    constructor(nome, resposta, nota){
        this.nome = nome;
        this.resposta = resposta;
        this.nota = nota;
    }

    exibirDetalhes(){ //toString -> transformar em string
        console.log(`Nome: ${this.nome}, resposta: ${this.resposta}, nota: ${this.nota}`);
    }
}