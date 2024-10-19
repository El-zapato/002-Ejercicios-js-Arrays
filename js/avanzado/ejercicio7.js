//Dado un arreglo de valores, cuenta cuántas veces aparece un valor específico usando reduce().

const array = [1, 2, 2, 3, 1, 4, 1, 5];
const valorContar = 1;

const contar = array.reduce((accumulator, currentValue) => {
  return currentValue === valorContar ? accumulator + 1 : accumulator;
}, 0);

console.log(contar); // Output: 3
