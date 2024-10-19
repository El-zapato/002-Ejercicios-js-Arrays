//Crea una función que multiplique cada número de un arreglo por 2 usando map().

function multiDos(arreglo) {
    return arreglo.map(numero => numero * 2); // se multiplicaran los numeros por dos
    //.map crea un nuevo arreglo
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = multiDos(numeros);
console.log(resultado); 
