console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = []; //declaração de matriz
var linha = 3;
var coluna = 3;
// z percorre as linhas
for (var z = 0; z < linha; z++) {
    // Cria um array vazio para preencher a linha correspondente ao z
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        // Atribuição via entrada de dados manual na varivel nome
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [".concat(x + 1, " , ").concat(z + 1, "] \n                                        da matriz: "));
        // atribui nome na minhaMatriz do endereço dado por x e z
        minhaMatriz[z][x] = nome;
    }
}
// Imprime a matriz
console.log(minhaMatriz);
