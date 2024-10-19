//Escribe una función que, dado un arreglo de palabras y un número n, devuelva las palabras que tengan más de nletras.

function palabraLarga(arreglo, n) {
    return arreglo.filter(palabra => palabra.length > n);
    //.filter crea un nuevo arreglo que contiene las palabras con la longitud de "n"
}

const palabras = ["skibidipomnisigma", "Paranguquitirimicuaro", "supercalifragilisticoescialidozo", "flsmdf", "agua"];
const n = 10;
const resultado = palabraLarga(palabras, n);

console.log(resultado);
