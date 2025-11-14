// 1 Classe representando uma conta bancária
class ContaBancaria {
    // Declaração da classe 'ContaBancária'
    // Atributo privado: só pode ser acessado dentro da classe
    #saldo = 0;
    // Declara o atributo '#saldo'. O '#' torna ele privado, impedindo acesso/modificação extera. Inicializa com 0

    //Método para depositar um valor
    depositar(valor) {
        // Define um método público 'depositar' que recebe 'valor' como argumento
        if (valor > 0) {
            // Verifica se o valor a ser depositado é positivo
            this.#saldo += valor;
            // se for positivo, adiciona 'valor' ao '#saldo' (o acumulado interno)
        } else {
            // Se a condição (valor > 0) for falsa
            console.log("valor inválido para depósito!");
            // Exibe uma mensagem de erro no console
        }
    }

    //  Método para mostrar o saldo atual (sem permitir alterar diretamente)
    verSaldo() {
        // Define um método público 'verSaldo' para exibir o saldo
        console.log(`saldo atual: R$ ${this.#saldo}`);
        // Exibe o valor do '#saldo' (acessível aqui dentro da classe)
    }
}

// Usando a classe
const conta = new ContaBancaria();
// Cria uma nova instância da classe 'ContaBancaria' e a armazena constante 'conta'
conta.depositar(1000);
// Chama o método público 'depositar' para adicionar 1000 ao saldo intrno
conta.verSaldo(); // Mostra: Saldo atual: R$ R$ 1000
// Chama o método 'verSaldo', que acessa exibe o saldo (1000)
// conta.#saldo = 5000; Erro - não pode acessar atributo privado
// Esta linha causaria um sintaxe, pois '#' impede acesso direto de fora da classe

// 2 Classe que representa uma impressora
class Impressora {
    // Declaração da classe 'Impressora'
    // Método Público: ação simples e direta
    imprimir(documento) {
        // Define método público principal 'imprimir'
        this.#iniciarImpressora();
        // Chamar o métdo privado '#iniciarImpressora' (detalha de implementação)

        this.#carregarTinta();
        // Chama o método privado 'carregarTinta' (detalhe de implementação)
        console.log(`Imprimindo: ${documento}`);
        // Executa a ção principal visível ao usuário
        this.#finalizarImpressao();
        // Chama o método privado '#finalizarImpressao' (detalhe de implementação)
    }
    // Método privados: detalhes internos escondidos
    #iniciarImpressora() {
        // Define um método privado '#iniciarImpressora'
        console.log("Inicializando impressora. . .");
        // A lógica interna (escondida) do início
    }
    #carregarTinta() {
        // Define um método privado '#carregarTinta'
        console.log("Carregando tinta");
    }
    #finalizarImpressao(){
        // Define um método privado '#finalizarImpressao'
        console.log("Impressão concluída");
        //A lógica interna (escondida) da finalização
    }
}
// Usando a classe
const impressao = new Impressora();
// Cria uma nova instância da classe 'Impressora'
impressao.imprimir("Relatório.pdf");
// Chama o método público 'imprimir', que orquestra a execução detodos os métodos privados internos
//impressora.#carregarTinta(); nõ pode ser chamado diretamente
// Esta linha falharia, pois o método '#carregarTinta' é privado e só pode ser chamado de dentro de 'Impressora'


//3 Classe que representa um sistema de pedidos
class Pedido{
    // Declaração da classe 'Pedido'
    constructor(cliente, itens){
        // O construtor é chamado ao criar um novo objeto 'Pedido'
        this.cliente = cliente;
        //  Define a proprieda 'cliente' no objeto (público)
        this.itens = itens;
        // Define a proprieda 'itens' no objeto (público)
    }
    // Metodo principal que o usuário chama
    finalizarPedido(){
        // Define o método público 'finalizaPedido'
        const total = this.#calcularTotal();
        // Chama o método privado '#calcularTotal' para obter o valor
        if (this.#validarItens()){
            // chama o método privado '#validarItens' para checar a validade antes de prosseguir
            console.log(`Pedido de ${this.cliente} finalizado. Total> R$ ${total}`);
            // Exibe a mensagem finalização com o nome do cliente
            this.#enviarConfirmacao();

        }
    }
    #validarItens(){
        // Define um método privado para a regra de validação
        return this.itens.length > 0;
        // Retorna 'true' se houer pelo menso um item no array 'itens'
    }
    #calcularTotal(){
        // Define um método privado parao  cálculo total
        return this.itens.reduce((soma, item) => soma + item.preco, 0);
        // Usa 'reduce' para somar a propriedade 'preco' de todos os itens e retorna o total
    }
    #enviarConfirmacao(){
        // Define um método privado para ação de confirmação
        console.log("E-mail de confirmação enviado!");
        // Simula o envio de e-mail
    }
}
// usando a classe
const pedido = new Pedido("Carlos", [
    //Cria uma nova instância 'Pedido', passando o cliente e um array de itens
    {nome: "Mouse", preco: 80},
    // Primeiro item com nome e preço
    {nome:"Teclado", preco: 150}
]);
pedido.finalizarPedido();
// Chama o método púbico 'finalizarPedido', que executa os passos internos (privados) da validação, cálculo e envio