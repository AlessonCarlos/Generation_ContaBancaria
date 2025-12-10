import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from "./src/controller/ContaController";


export function main() {


    //Instancia da classe contaController
    let contas: ContaController = new ContaController();
    //Variáveis Auxiliares
    let opcao, numero,agencia,tipo,saldo,limite,aniversario,valor,numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];


    // Objeto conta
    // Objeto da conta corrente
    const contacorrente: ContaCorrente = new ContaCorrente(2 , 123 , 1 , "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();
    // Objeto da conta poupança
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3 , 123 , 2 , "Victor", 1000, 10)
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();




    while (true) {
        
        console.log(colors.bg.black, colors.fg.yellow,                                                                                                                                  "***************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                "); 
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset
        );

        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt("");
        console.log('Voce digitou: ', opcao);

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log("O Banco com Z - Agradeço a sua visita!");
            console.log(colors.reset, "")
            process.exit(0);
        }

        // CONVERSÃO PARA SWITCH CASE
        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\ncriar conta:\n\n ");
                console.log("Digite o numero da agencia: ");
                agencia = readlinesync.questionInt("");
                console.log("Digite o Nome do Titular da conta: ");
                titular = readlinesync.question("");

                console.log("\nDigite o tipo da Conta: ");
                tipo = readlinesync.keyInSelect(tiposContas, "",{cancel: false}) + 1;

                console.log("\nDigite o Saldo da conta (R$): ");
                saldo = readlinesync.questionFloat("");

                switch (tipo){
                    case 1:
                    console.log("Digite o limite da Conta (R$): ");
                    limite = readlinesync.questionFloat("");
                    contas.cadastrar(
                        new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
                    break;
                    case 2:
                    console.log("Digite o Dia do aniversario da Conta Poupanca: ");
                    aniversario = readlinesync.questionInt("");
                    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia,tipo,titular,saldo,aniversario));
                    break;

                }
                KeyPress()
                break;
                
            case 2:
                
                console.log(colors.fg.whitestrong,
                    "\n\nListando todas as contas\n\n");
                contas.listarTodas();
                KeyPress()
                break;
                
            case 3:
                
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por numero\n\n", colors.reset);
                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero)
                KeyPress()
                break;
                
            case 4:
            
                console.log(colors.fg.whitestrong,
                    "\n\nVamos atualizar os dados da conta\n\n", colors.reset);

                console.log("Digite o numero da Conta: ");
                numero = readlinesync.questionInt("");
                let conta = contas.buscarNoArray(numero);

                if (conta != null){

                    console.log("Digite o numero da agencia: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o nome do titular da conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("\nDigite o Saldo da conta (R$): ");
                    saldo = readlinesync.questionFloat("")
                switch(tipo){
                    case 1:
                        console.log("Digite o limite da Conta (R$): ");
                        limite = readlinesync.questionFloat("");
                        contas.atualizar(
                            new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log("Digite o Dia do aniversario da Conta Poupança: ");
                        aniversario = readlinesync.questionInt("")
                        contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                        break

                        
                }


                } else {
                    console.log(colors.fg.red, "\A Conta numero: " + numero + " não foi encontrada!", colors.reset)
                }

                KeyPress()
                break;
                
            case 5:
                
                console.log(colors.fg.whitestrong,
                    "\n\nApagar Conta\n\n", colors.reset);

                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt("");
                    contas.deletar(numero)
                KeyPress()
                break;
                
            case 6:
                
                console.log(colors.fg.whitestrong,
                    "\n\nSaque...\n\n",colors.reset);
                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt("");

                    console.log("\nDigite o valor do Saque (R$): ");
                    valor = readlinesync.questionFloat("");

                    contas.sacar(numero,valor);
                KeyPress()
                break;
                
            case 7:
                
                console.log(colors.fg.whitestrong,
                    "\n\nRealizar deposito...\n\n",colors.reset);
                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt("");

                    console.log("\nDigite o valor do Deposito (R$): ");
                    valor = readlinesync.questionFloat("");

                    contas.depositar(numero,valor)


                KeyPress()
                break;
                
            case 8:
                
                console.log(colors.fg.whitestrong,
                    "\n\nTransferencia Bancaria\n\n",colors.reset);
                     console.log("Digite o numero da conta de Origem: ");
                     numero = readlinesync.questionInt("");

                     console.log("Digite o numero da conta de destino: ");
                     numeroDestino = readlinesync.questionInt("");

                     console.log("\nDigite o valor da transferencia (R$): ");
                     valor = readlinesync.questionFloat("");

                     contas.transferir(numero,numeroDestino,valor)


                KeyPress()
                break;
                
            default:
                console.log("\nOpção Inválida! Por favor, escolha uma opção entre 1 e 9.\n");
                break;
        }
    }
}



export function sobre(): void {
    console.log("*****************************************************");
    console.log("Projeto Desenvolvido por:Alesson Carlos do Nascimento Melo ");
    console.log("Generation Brasil - alessonm@genstudents.org");
    console.log("https://github.com/AlessonCarlos/Generation_ContaBancaria");
    console.log("*****************************************************");
}

function KeyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...")
    readlinesync.prompt();
}

main();