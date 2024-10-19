//Dado un arreglo de objetos con propiedades {nombre: string, edad: number}, 
//usa map() para crear un nuevo arreglo que solo contenga los nombres.

const personas = [
    { nombre: 'Ariel', edad: 25 },
    { nombre: 'Luis', edad: 30 },
    { nombre: 'Yuri', edad: 22 },
  ];
  
  const nombres = personas.map(persona => persona.nombre);
  
  console.log(nombres); 
  