/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
numero: Pablo Sponchiado
*/

console.clear();
let teclado = require(`prompt-sync`)();
let matrizDois: string[][] = new Array(3);

for (let i = 0; i < 3; i++) {
  matrizDois[i] = new Array(3);

  for (let j = 0; j < 3; j++) {
    let numero = teclado(
      `Digite o número que vai estar no endereço [${i}, ${j}] da matriz: `);
    matrizDois[i][j] = numero;
    
    if (Number(matrizDois[i][j]) < 0 || Number(matrizDois[i][j]) > 9) {
      console.log(`Número inválido! Digite um número entre 0 e 9.`);
      j--;
    }
  }
}
console.log(matrizDois);
