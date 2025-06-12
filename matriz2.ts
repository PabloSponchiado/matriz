console.clear();
let teclado = require(`prompt-sync`)();
let matrizDois: string[][] = new Array(3); //declaração de matriz

for (let i = 0;i < 3;i++) {
    /*Cria um array vazio para preencher a linha correspondente ao i
    limitando a três linhas*/
    matrizDois[i] = new Array(3);

    for (let j = 0;j < 4;j++) {
        // Atribuição via entrada de dados manuais na variavel nome
       let nome = teclado(`Digite o nome que vai estar no endereço [${i}, ${j}]
                           da matriz: `);
    
        //Atribui nome na minhaMatriz do endereço por i e j
        matrizDois[i][j] = nome;
    
        }
}
// Imprime a matriz
console.log(matrizDois);