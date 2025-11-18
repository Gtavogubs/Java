// 1 Exemplo - Formas Geométricas (Poliformismo clássico)

// Cada forma (círculo, quadrado, triângulo) possui o mesmo método desenhar(), mas com comportamento diferente.
// Classe base
class Forma{
    // método genérico de desenho, será sobrescrito nas claasses filhas
    desenhar(){
        console.log("Desenhando uma forma geneérica...");
    }
}
// Classes derivadas (herdam e modificam o método desenhar)
class Circulo extends Forma{
    desenhar(){
        console.log("desenhando um círculo 🟠");
    }
}

class Quadrado extends Forma{
    // Sobrescreve o método desenhar()
    desenhar(){
        console.log("Desenhando um quadrado 🟩");
    }
}

class Triangulo extends Forma{
    // Sobrescrever o método desenhar()
    desenhar(){
        console.log("Desenhando um triângulo 🔺");
    }
}

// Lista de formas (todas tratadas como 'forma')
const formas = [new Circulo(), new Quadrado(), new Triangulo()];

// Chama o mesmo método em diferentes objetos
formas.forEach(f => f.desenhar());
// Cada objeto executa sua própria versão do método desenhar()
// Polimorfismo: O método desenhar() é o mesmo para todas as classes,
// mas o resultado muda conforme o tipo do objeto

// 2 Exemplo - Veículos (mesmo método, ações)
// Todos os veículos tem o método mover(), mas cada um se comporta de forma diferente
// Classe Base 

class Veiculo{
    mover(){
        console.log("O veículo está se movendo..")
    }

}

// Classes filhas sobrescrevem o método
class Carro extends Veiculo{
    // Versão específica do método mover()
    mover(){
        console.log("O carro está rodando pelas ruas");
    }
}

class Barco extends Veiculo{
    // Versão específica
    mover(){
        console.log(" O barco está navegando no mar 🏄");
    }
}

class Aviao extends Veiculo{
    // Versão específica
    mover(){
        console.log("O avião está voando pelos céus 🛬");
    }
}

// Função que aplica o polimorfismo
function iniciarMovimento(veiculo){
    veiculo.mover(); // Chama o método mover sem saber o tipo do objeto
}

// teste

iniciarMovimento(new Carro());
iniciarMovimento(new Barco());
iniciarMovimento(new Aviao());


// Polimorfismo: IniciarMovimento() Não precisa saberqual tipo de veículo está recebendo
// - Apenas chama mover(), e cada classe trata do seu jeito

// 3 -  Exemplo - Funcionários (mesma função, diferentes cargos)
// Cada tipo de funcionário calcula seu bônus de forma diferente
//usando o método calcularBonus()

// classe base
class Funcionario{
    // Recebe nome e salário ao criar um novo funcionário
    constructor(nome, salario){
        this.nome = nome; // Guarda o nome
        this.salario = salario; // Guarda o salário
    }

    // Método padrão de cálculo de bônus (5%)
    calcularBonus(){
        return this.salario * 0.05;
    }
}
// Classes derivadas (com regras específicas de bonus)
class Gerente extends Funcionario{
    // Gerente ganha 20%
    calcularBonus(){
        return this.salario * 0.20;
    }
}

class Desenvolvedor extends Funcionario{
    // Desenvolvedor ganha 10%
    calcularBonus(){
        return this.salario * 0.10;
    }
}

class Estagiario extends Funcionario {
    // Estagiario ganha 2%
    calcularBonus(){
        return this.salario * 0.02;
    }
}

// Lista de funcionários
const funcionarios = [
    new Gerente("Marcos", 8000), // Gerente com salário 8000
    new Desenvolvedor("Ana", 5000), // Desenvolvedor com salário 5000
    new Estagiario("Pedro",2000) // Estagiário com salário de 2000
];

// Aplicando o mesmo método em diferentes objetos
funcionarios.forEach(f => {
    // cada funcionário calcula seu bônus conforme sua classe
    console.log(`${f.nome} - Bônus R$ ${f.calcularBonus()}`);
});
// Polimorfismo: todos os funcionários tem o método calcularBonus()
// mas cada um calcla de forma diferente dependendo do cargo