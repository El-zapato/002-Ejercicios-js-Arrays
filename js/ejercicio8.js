//Escribe una función que reciba un arreglo y un valor, y retorne true si el valor existe en el arreglo y false si no.

function estaArreglo(arreglo, valor) {
    return arreglo.includes(valor); // Retornara true si el valor esta en el arreglo o false si no lo esta
}

let numeros = [1, 2, 3, 4, 5];
console.log(estaArreglo("el numero esta? "+numeros, 3)); // verdadero 
console.log(estaArreglo("el numero esta? "+numeros, 6)); // falso
