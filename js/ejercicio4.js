//Escribe una función que tome un arreglo y lo devuelva invertido (sin usar reverse()).

function invertirArreglo(arreglo) {
    let arregloInvertido = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        arregloInvertido.push(arreglo[i]);
    }
    return arregloInvertido; //retornamos el total
}

let numeros = [1, 2, 3, 4, 5]; //numeros en orden
let resultado = invertirArreglo(numeros);
console.log(resultado);
