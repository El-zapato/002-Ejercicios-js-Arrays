//Dado un arreglo de números, usa reduce() para retornar la suma acumulada de los elementos.

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(suma); 
