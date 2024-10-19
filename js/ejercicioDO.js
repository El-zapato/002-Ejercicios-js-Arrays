let arreglo=[]; //es una variable global porque podemos acceder dentro de un ambito o fuera de uno ({})

function agregarDato() { //agregar dato hasta salir
    let palabraClave = "salir";   // a   r   b   t 
    let dato;                     //   t   i   u   o
    //agregar datos a arreglos

    do {
        dato=prompt("Ingrese un dato o ${palabraClave} para salir");
        if (dato.toLowerCase().trim()!==palabraClave) { //trim sirve para quitar espacios al inicio y al final
            arreglo.push(parseFloat(dato));
        }
    }while(dato.toLowerCase() !==palabraClave);
    return arreglo;
}

let arregloDeDatos=agregarDato();
console.log(":::Tus Datos Ingresados son:::", arregloDeDatos)