//Dado un arreglo de personas con edades, agrúpalas en diferentes grupos 
//según la década en la que se encuentren (20s, 30s, etc.) usando reduce().

const personas = [
  { nombre: 'Esther', edad: 25 },
  { nombre: 'Jose', edad: 28 },
  { nombre: 'Marta', edad: 22 },
  { nombre: 'Pedro', edad: 45 },
  { nombre: 'Sofia', edad: 29 },
  { nombre: 'Juan', edad: 38 },
];

const agruparDecadas = personas.reduce((acc, persona) => {
  const decada = Math.floor(persona.edad / 10) * 10; // calculamos la decada
  const rangoDecada = `${decada}s`; 

  if (!acc[rangoDecada]) {
    acc[rangoDecada] = [];
  }

  acc[rangoDecada].push(persona);

  return acc; 
}, {});

console.log(agruparDecadas);
