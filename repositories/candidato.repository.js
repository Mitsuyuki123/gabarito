import fs from 'fs';
import { Candidato } from "../models/candidato.model.js";

const caminhoArquivo = './data/candidatos.json';

export class CandidatoRepository {
    listarCandidatos(){
        try {
            const dadosString = fs.readFileSync(caminhoArquivo, 'utf-8');
            const dados = JSON.parse(dadosString); //transforma de string para objeto
            return dados.map(dado => new Candidato(dado.nome, dado.resposta, dado.nota));            
        } catch (error) {
            console.error("ERROR: Nenhum dado encontrado ou erro ao carregar. Iniciando com lista vazia.");
            return [];        
        }
        
    }

    salvarCandidatos(novoCandidato){
        try {
            const candidatos = this.listarCandidatos();
        candidatos.push(novoCandidato);

        const candidatosString = JSON.stringify(candidatos);
        
        fs.writeFileSync(caminhoArquivo, candidatosString, 'utf-8');
        } catch (error) {
            console.error('Erro ao salvar os dados', error.message);
        }

    }
}
