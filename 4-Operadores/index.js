var valor1, valor2, valor3, valor4, valor5, valor6;
valor1 = 10;
valor2 = 5;
valor3 = 2;
valor4 = "5";
valor5 = "Denis";
valor6 = "Sanots";
// Operadores aritméticos
document.getElementById("ar1").innerHTML = valor1 + valor3;
document.getElementById("ar2").innerHTML = valor1 - valor3;
document.getElementById("ar3").innerHTML = valor1 * valor3;
document.getElementById("ar4").innerHTML = valor1 / valor3;
// Operadores de atribuição
// document.getElementById("at1").innerHTML = ++valor1;
// document.getElementById("at2").innerHTML = --valor1;
// document.getElementById("ar1").innerHTML = valor1 += valor3;

// Operadores de sequência
document.getElementById("sq1").innerHTML = valor5 + valor6;

// Operadores de comparação
document.getElementById("comp1").innerHTML = valor1 > valor2;
document.getElementById("comp2").innerHTML = valor1 < valor2;
document.getElementById("comp3").innerHTML = valor1 >= valor2;
document.getElementById("comp4").innerHTML = valor1 <= valor2;
document.getElementById("comp5").innerHTML = valor2 == valor4;
document.getElementById("comp6").innerHTML = valor1 != valor4;
document.getElementById("comp7").innerHTML = valor2 === valor4;
document.getElementById("comp8").innerHTML = valor2 !== valor2;
document.getElementById("comp9").innerHTML = valor2 && valor3 > valor4;