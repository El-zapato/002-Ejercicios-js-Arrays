//Dado un arreglo de números, usa map() para reemplazar cada número negativo con su valor absoluto.

const numeros = [-40, 3, -9, -7, 12, 8, -34];

const valorAbsoluto = numeros.map(num => Math.abs(num));

console.log(valorAbsoluto);
