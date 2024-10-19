//Dado un arreglo de números y un número n, usa every() para verificar si todos los números son mayores que n.

const numeros = [5, 8, 13, 19];
const n = 4;

const mayorQn = numeros.every(num => num > n);

console.log(mayorQn); 
