//Escribe una función que reciba un arreglo de números y retorne la suma de todos sus elementos.

let numeros=[3,5,8,2,5];
let total =numeros.reduce((a,b)=> a+b, 0);

console.log("La suma de estos numeros",numeros,"es",total);
