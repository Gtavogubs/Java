let numbers = [];
let sortedNumbers = [];
let tempoInicial = 10;
let tempoRestante = tempoInicial;
let intervaloTempo;
let fase = 1;
let jogoAtivo = false;
let tempoMinimo = 5; // Tempo minimo final

function gerarNumeros() {
    numbers = [];
    for (let i = 1; i <= 10; i++) {
        numbers.push(i);
    }
    numbers.sort(() => Math.random() - 0.5);
    sortedNumbers = [...numbers].sort((a, b) => a - b);
}

function exibirNumeros() {
    const container = document.getElementById("numbers");
    container.innerHTML = "";
    numbers.forEach((num, index) => {
        const div = document.createElement("div");
        div.className = "number";
        div.textContent = num;
        div.onclick = () => verificarClique(index);
        container.appendChild(div);
    });
}
function iniciarJogo() {
    if (jogoAtivo) return;
    jogoAtivo = true;
    gerarNumeros();
    exibirNumeros();
    document.getElementById("mensagem").innerHTML = "<p> Boa sorte! </p>";
    tempoRestante = tempoInicial;
    atualizarTempo();

    intervaloTempo = setInterval(() => {
        tempoRestante--;
        atualizarTempo();
        if (tempoRestante <= 0) {
            clearInterval(intervaloTempo);
            alert("Tempo esgotado! tente novamente.");
            jogoAtivo = false;
        }
    }, 1000);
}

function atualizarTempo() {
    document.getElementById("tempo").textContent = `tempo: ${tempoRestante}s`;
}

function verificarClique(index) {
    if (!jogoAtivo) return;
    if (numbers[index] === sortedNumbers[0]) {
        numbers.splice(index, 1);
        sortedNumbers.shift();
        exibirNumeros();

        if (numbers.length === 0) {
            clearInterval(intervaloTempo);
            if (tempoInicial <= tempoMinimo) {
                venceuJogo();
            } else {
                alert(` fase ${fase} completada! `);
                proximaFase();
            }
        }
    } else {
        alert("Ordem errada! Reinicie o jogo.");
        clearInterval(intervaloTempo);
        jogoAtivo = false;
    }
}
function proximaFase() {
    fase++;
    tempoInicial = Math.max(tempoMinimo, tempoInicial - 1); // reduz 1s por fase até o minimo
    document.getElementById("fase").textContent = `Fase: ${fase}`;
    document.getElementById("mensagem").innerHTML = "<p> Preparando próxima fase... </p>";
    jogoAtivo = false;
    setTimeout(() => {
        iniciarJogo(); // Inicia a próxima fase automaticamente
    }, 2000);
}

function venceuJogo() {
    clearInterval(intervaloTempo);
    fase = 1;
    tempoInicial = 10;
    document.getElementById("fase").textContent = "fase: 1";
    document.getElementById("tempo").textContent = "Tempo: 10s";
    document.getElementById("mensagem").innerHTML = `<button onclick = "iniciarJogo()"> Começar jogo</button>`;
    jogoAtivo = false;
    document.getElementById("numbers").innerHTML = "";
}

function resetarJogo() {
    clearInterval(intervaloTempo);
    fase = 1;
    tempoInicial = 10;
    document.getElementById("fase").textContent = "Fase: 1";
    document.getElementById("tempo").textContent = "Tempo: 10s";
    document.getElementById("mensagem").innerHTML = `<button onclick="iniciarJogo()">Começar Jogo</button>`;
    jogoAtivo = false;
    document.getElementById("numbers").innerHTML = "";
}