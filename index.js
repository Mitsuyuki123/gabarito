import PromptSync from "prompt-sync";
import chalk from 'chalk';
import { CandidatoManager} from "./services/candidato-manager.service.js";

const input = PromptSync({sigint: true});
const candidatoManager = new CandidatoManager();
const log = console.log;

function menuPrincipal(){
    log(chalk.green("\nGerenciamento de Candidatos:"));
    log(chalk.green("1. Adicionar candidato."));
    log(chalk.green("2. Listar todos candidatos."));
    log(chalk.green("3. Buscar candidato pelo nome."));
    log(chalk.green("4. Sair."));

    const escolha = input(chalk.bgGreen("Digite o número da opção desejada: "));

    switch (escolha) {
        case '1':
            const nome = input("Nome do candidato: ");
            const resposta = input("Resposta do candidato: ");
            const arr = resposta.split('');
            const nota = input("Nota: ");
            candidatoManager.adicionarCandidato(nome, arr, nota);
            break;
        case '2':
            candidatoManager.listarCandidatos();
            break;
        case '3':
            const nomeBusca = input("Digite o nome a ser encontrado: ");
            candidatoManager.encontrarCandidato(nomeBusca);
            break;
        case '4':
            log(chalk.yellow("Saindo..."));
            return;
        default:
            log(chalk.red("Opção inválida. Tente novamente."));
    }
    menuPrincipal(); // recursividade
}

menuPrincipal();