//Dado un arreglo de números, retorna solo los números pares usando filter().

function numPares(arreglo) {
    return arreglo.filter(numero => numero % 2 === 0); //si es divisible, entonces es un numero par
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = numPares(numeros);
console.log(pares);
