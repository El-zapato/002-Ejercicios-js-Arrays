//Escribe una función que encuentre el número más grande en un arreglo de números.

let numeros=[3,6,-8,2,-5,8,-6, 10];
let max = 0;

numeros.forEach(e=>{
    if(e>max){
        max = e;
    }
})

console.log("El numero mayor es", max);