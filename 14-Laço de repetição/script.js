for (let numero = 0; numero < 5001; numero++) {
    document.getElementById("contagem").innerHTML += numero + ", ";
}

// preencher com anos

for (let ano = 2023; ano >= 1910; ano--) {
    document.getElementById("ano").innerHTML += "<option value='" + ano + "'>" + ano + "</option";
}
// Podemos também pegar a data atual para atualizar automico
let anoAtual = new Date().getDullYear();