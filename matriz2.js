console.clear();
var teclado = require("prompt-sync")();
var matrizDois = new Array(3); //declaração de matriz
for (var i = 0; i < 3; i++) {
    /*Cria um array vazio para preencher a linha correspondente ao i
    limitando a três linhas*/
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 4; j++) {
        // Atribuição via entrada de dados manuais na variavel nome
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "\n                           da matriz: "));
        //Atribui nome na minhaMatriz do endereço por i e j
        matrizDois[i][j] = nome;
    }
}
// Imprime a matriz
console.log(matrizDois);
