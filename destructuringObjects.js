// VER INFO: https://wesbos.com/destructuring-objects

// Creo ese objecto
const mascota = {
  nombre: 'Tom',
  edad: 10,
  vivo: true,
  razas: ['peludo', 'negro']
}

// muestro 
console.log(mascota.razas[1])
console.log(mascota.nombre)

const nombreMascota = mascota.nombre
console.log(nombreMascota)

// Destructuring object { nombre }
const {nombre} = mascota
console.log(nombre) // Tom

// Destructuring object { argumentos }
const {nombre, edad} = mascota
console.log(nombre, edad) // Tom, edad
