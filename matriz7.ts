/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
Nome: Pablo Sponchiado
*/

console.clear();
let teclado = require(`prompt-sync`)();
let matrizDois: string[][] = new Array(3); 

for (let i = 0;i < 3;i++) {
    matrizDois[i] = new Array(3);

    for (let j = 0;j < 3;j++) {
       let numero = matrizDois[i][j] = Math.floor(Math.random() * 10).toString();
        matrizDois[i][j] = numero;
    
        }
}
console.log(matrizDois);