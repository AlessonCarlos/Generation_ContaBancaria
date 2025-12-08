import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';


export function main() {

    let opcao: number;

    // Objeto conta
    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();

    conta.sacar(10500);
    conta.visualizar();
    
    conta.depositar(5000);
    conta.visualizar();

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
                KeyPress()
                break;
                
            case 2:
                
                console.log(colors.fg.whitestrong,
                    "\n\nListando todas as contas\n\n");
                KeyPress()
                break;
                
            case 3:
                
                console.log(colors.fg.whitestrong,
                    "\n\nBuscar conta por numero de conta\n\n");
                KeyPress()
                break;
                
            case 4:
            
                console.log(colors.fg.whitestrong,
                    "\n\nVamos atualizar os dados da conta\n\n");
                KeyPress()
                break;
                
            case 5:
                
                console.log(colors.fg.whitestrong,
                    "\n\nApagar Conta\n\n");
                KeyPress()
                break;
                
            case 6:
                
                console.log(colors.fg.whitestrong,
                    "\n\nSaque...\n\n");
                KeyPress()
                break;
                
            case 7:
                
                console.log(colors.fg.whitestrong,
                    "\n\nRealizar deposito...\n\n");
                KeyPress()
                break;
                
            case 8:
                
                console.log(colors.fg.whitestrong,
                    "\n\nTransferencia Bancaria\n\n");
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