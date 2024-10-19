//Dado un arreglo de objetos, encuentra el primer objeto que tenga una propiedad específica usando find().

const objetos = [
    { id: 20230221, nombre: "Yuritzi", edad: 19 },
    { id: 20349745, nombre: "Alegandra", edad: 30 },
    { id: 45354887, nombre: "Charlie", edad: 25 },
];

function propiedadEspe(arreglo, propiedad, valor) {
    return arreglo.find(objeto => objeto[propiedad] === valor);
}

const resultado = propiedadEspe(objetos, "nombre", "Alegandra");

console.log(resultado); 
