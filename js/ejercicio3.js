// Dado un arreglo de números, crea una función que calcule y retorne el promedio de esos números.

let numeros=[3,5,7,8,9,5,2,6,8,4,355]
let total =numeros.reduce((a,b)=> a+b, 0);

let promedio=total/numeros.length;

console.log(promedio)
