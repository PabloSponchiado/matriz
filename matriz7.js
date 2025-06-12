/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
Nome: Pablo Sponchiado
*/
console.clear();
var teclado = require("prompt-sync")();
var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 3; j++) {
        var numero = matrizDois[i][j] = Math.floor(Math.random() * 10).toString();
        matrizDois[i][j] = numero;
    }
}
console.log(matrizDois);
