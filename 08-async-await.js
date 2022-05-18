// ---------------AHORA SE USA ASI ----------------------

//ASYNC Y AWAIT -> es una funcion de flecha
const obtenerPokemones = async() => {
  // siempre para poder capturar los errores en mi promesa es usar try y catch
  try {
    //intenta hacer esto
    // esperemos esta peticion
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/')
    // esta respuesta tranformela a formato JSON
    const data = await respuesta.json()
  } catch (error) {
    //de lo contrario
    //capturo mi error
    console.log(error)
  }
  
  //para ver el resultado debemos de llamar la funcion
  obtenerPokemones()
}
