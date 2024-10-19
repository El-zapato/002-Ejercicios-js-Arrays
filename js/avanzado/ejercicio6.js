//Dado varios arreglos de números, combínalos todos en un solo arreglo y ordénalo de menor a mayor.

function combinarYordenar(arreglos) {
    const combinado = [].concat(...arreglos);
    
    const ordenado = combinado.sort((a, b) => a - b);
    
    return ordenado;
}

const arreglos = [
    [3, 1, 4],
    [2, 5],
    [8, 7, 6]
];

const resultado = combinarYordenar(arreglos);
console.log(resultado);