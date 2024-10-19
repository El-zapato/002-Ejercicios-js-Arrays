//Dado un arreglo que contiene valores truthy y falsy, elimina todos los valores falsy usando filter().

const arreglo = [0, 8, "", null, "zapato", 23, false];

const valTruthy = arreglo.filter(Boolean);

console.log(valTruthy); 
