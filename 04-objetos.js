// declaro un objeto
const mascota = {
  nombre: 'Tom',
  edad: 5,
  tipo: 'gato',
  vivo: true,
  tipoRaza: ['sol','playa'] 
}

mascota.raza = 'peludo' //agrego una propiedad adicional
console.log(mascota) // {nombre: "Tom", edad: 5, tipo: "Gato", raza: "peludo", vivo: true}
console.log(mascota.raza)// peludo
console.log(mascota.vivo)// true
console.log(mascota.tipoRaza) // ["sol","playa"]
console.log(mascota.tipoRaza[0]) // sol
console.log(mascota.tipoRaza[1]) // playa


// para que tenga un id
mascota.id = 1
console.log(mascota.id) // 1
