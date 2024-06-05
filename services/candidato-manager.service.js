import { Candidato } from "../models/candidato.model.js";
import { CandidatoRepository } from "../repositories/candidato.repository.js";


export class CandidatoManager {
    repositorio = new CandidatoRepository();

    constructor(){
        this.candidato = this.repositorio.listarCandidatos();
    }

    adicionarCandidato(nome, resposta, nota){ //Create (C do CRUDE)
        const novoCandidato = new Candidato(nome, resposta, nota);
        this.repositorio.salvarCandidatos(novoCandidato);
    }

    listarCandidatos(){
        if(this.candidato.length === 0){
            console.log("Não há candidato registrados.");
            return; //early return
        }
        console.log("Lista de candidato:");
        this.candidato.forEach((candidato, index) => {
            console.log(`Candidato ${index+1}: `);
            candidato.exibirDetalhes();
        });
    }

    encontrarCandidato(nome){ 
        const candidatoEncontrado = this.candidato.find(candidato => candidato.nome.toLowerCase() === nome.toLowerCase());
        
        if(candidatoEncontrado) {
            console.log("Dados do cadidato:");
            candidatoEncontrado.exibirDetalhes();
        } else {
            console.log(`Candidato com o nome ${nome} não foi encontrado.`);
        }
    }

}