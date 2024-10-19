//Escribe una función que tome dos arreglos y los combine en uno solo.

function combinarArreglos(arreglo1, arreglo2) {
    return arreglo1.concat(arreglo2); // Combina los dos arreglos
}

// Ejemplo de uso
let arreglo1 = [1, 3, 8];
let arreglo2 = [4, 2, 6];
let combinado = combinarArreglos(arreglo1, arreglo2);
console.log(combinado);
