//Dado dos arreglos de objetos, usa map() para combinar los objetos con el mismo índice en un solo arreglo de objetos.

const array1 = [
    { nombre: 'Roberto', edad: 25 },
    { nombre: 'Jose', edad: 30 },
  ];
  
  const array2 = [
    { ciudad: 'Zarayork' },
    { ciudad: 'Zacualtinieblas' },
  ];
  
  const combinados = array1.map((objeto, index) => {
    return { ...objeto, ...array2[index] }; // Combinamos los objetivos
  });
  
  console.log(combinados);
  