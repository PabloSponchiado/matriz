/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
Nome: Pablo Sponchiado
*/
console.clear();
var teclado = require("prompt-sync")();
var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 3; j++) {
        var nome = teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "] da matriz: "));
        matrizDois[i][j] = nome;
        if (Number(matrizDois[i][j]) < 0 || Number(matrizDois[i][j]) > 9) {
            console.log("N\u00FAmero inv\u00E1lido! Digite um n\u00FAmero entre 0 e 9.");
            j--;
        }
    }
}
console.log(matrizDois);
