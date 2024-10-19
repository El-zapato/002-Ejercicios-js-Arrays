//Dado un arreglo de números, usa some() para verificar si al menos uno es par.

const numeros = [1, 3, 5, 7, 8];

const numeroPar = numeros.some(num => num % 2 === 0);

console.log(numeroPar);
