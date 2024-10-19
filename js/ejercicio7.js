//Dado un arreglo de números, retorna un nuevo arreglo con los valores únicos (sin duplicados).

function valores(arreglo) {
    return arreglo.filter((valor, indice) => arreglo.indexOf(valor) === indice); //crea un arreglo que pasa la prueba especificada
    //indexOf devuelve el primer indice, asegurandose que solo mantenga la primera aparicion de cada numero
}

let numeros = [1, 2, 2, 3, 4, 4, 5];
let unicos = valores(numeros);
console.log(unicos); 
