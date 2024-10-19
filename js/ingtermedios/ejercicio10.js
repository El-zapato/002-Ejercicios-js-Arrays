//Escribe una función que reciba un arreglo de números y use reduce() para calcular el producto de todos los números.

function calcularProducto(numeros) {
    return numeros.reduce((producto, num) => producto * num, 1);
}

const arreglo = [1, 2, 3, 4];
const total = calcularProducto(arreglo);

console.log(total); 
