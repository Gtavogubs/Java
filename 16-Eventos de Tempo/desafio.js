let tempo = 0;
let tempo1 = tempo2;


function iniciarCronometro() {
    tempo1 = tempo2;
    atttime();
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

function atttime() {
    document.getElementById("tempo").textContent = `tempo: ${tempoRestante}s`;
}