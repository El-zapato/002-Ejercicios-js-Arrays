//Escribe una función que reciba un arreglo y un valor, y retorne el índice del valor en el arreglo (o -1 si no existe).

function valorindice(arreglo, valor) {
    return arreglo.indexOf(valor);
}

const numeros = [10, 20, 30, 40, 50]; //0=10, 1=20, 2=30, 3=40, 4=50
const valorBuscar = 30;
const indice = valorindice(numeros, valorBuscar);

console.log(indice);
