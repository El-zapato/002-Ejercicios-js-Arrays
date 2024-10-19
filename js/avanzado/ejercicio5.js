//Escribe una función que verifique si un arreglo está vacío (sin usar length directamente).

function estaVacio(arreglo) {
    for (const elemento of arreglo) {
        return false;
    }
    return true;
}

console.log(estaVacio([])); 
console.log(estaVacio([1, 2, 3])); 
