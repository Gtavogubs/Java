class Teste{
    tentativas(){
        console.log("Contando o número de testes.")
    }
}
class Deveres extends Teste{
    tentativas(){
        console.log("Realizando um segundo teste")
    }
}
class Obrigacoes extends Teste{
    tentativas(){
        console.log("Realizando um terceiro teste")
    }
}
const testes = [new Deveres(), new Obrigacoes()]
testes.forEach(f => f.tentativas());