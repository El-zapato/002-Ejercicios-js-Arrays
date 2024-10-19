//Escribe una función que reciba una cadena de texto y la convierta en un arreglo de palabras.

function converArreglo(cadena) {
    return cadena.split(' ');
}

const texto = "Hola smallville, hoy es un lindo dia para volar";
const arreglopal = converArreglo(texto);

console.log(arreglopal);
