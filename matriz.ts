console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: string[][] = []; //declaração de matriz
let linha : number = 3;
let coluna : number = 3;

// z percorre as linhas
for (let z = 0; z < linha; z++) {
   // Cria um array vazio para preencher a linha correspondente ao z
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        // Atribuição via entrada de dados manual na varivel nome
        let nome: string = teclado (`Digite o nome que vai estar no endereço [${x + 1} , ${z + 1}] da matriz: `);

        // atribui nome na minhaMatriz do endereço dado por x e z
        minhaMatriz[z][x] = nome;
    }

}
// Imprime a matriz
console.log(minhaMatriz)