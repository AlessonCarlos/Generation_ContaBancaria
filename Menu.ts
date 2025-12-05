import readlinesync = require("readline-sync");

export function main() {
    let opcao: number;

    while (true) {
        console.log("*****************************************************");
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
        console.log("                                                     ");

        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt("");
        console.log('Voce digitou: ', opcao);

        if (opcao == 9) {
            console.log("Banco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log("O Banco com Z - Agradeço a sua visita!");
            process.exit(0);
        }

        // CONVERSÃO PARA SWITCH CASE
        switch (opcao) {
            case 1:
                console.log("Bem vindo ao sistema do Brazil com Z - Vamos criar sua conta: ");
                break;
                
            case 2:
                console.log("Bem vindo ao sistema do Brazil com Z!");
                console.log("Listando todas as contas");
                break;
                
            case 3:
                console.log("Bem vindo ao sistema do Brazil com Z!");
                console.log("Buscar conta por numero de conta");
                break;
                
            case 4:
                console.log("Bem vindo ao sistema do Brazil com Z!");
                console.log("Vamos atualizar seus dados");
                break;
                
            case 5:
                console.log("Bem vindo ao sistema do Brazil com Z!");
                console.log("Uma pena que voce esteja nos deixando");
                console.log("Vamos prosseguir com o encerramento da sua conta!");
                break;
                
            case 6:
                console.log("Bem vindo ao sistema do Brazil com Z!");
                console.log("Entrando no sistema de saque...");
                break;
                
            case 7:
                console.log("Bem vindo ao sistema do Brazil com Z!");
                console.log("Entrando no sistema de depositos...");
                break;
                
            case 8:
                console.log("Bem vindo ao sistema do Brazil com Z!");
                console.log("Entrando no sistema de transferencia bancaria");
                break;
                
            default:
                console.log("Opção Inválida! Por favor, escolha uma opção entre 1 e 9.");
                break;
        }
    }
}

export function sobre(): void {
    console.log("*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

main();