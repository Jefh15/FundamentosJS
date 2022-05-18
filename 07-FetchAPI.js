// hacer una peticion HTTP con esta pagina: https://pokeapi.co/

// Este nos arroja un objeto
// url: https://pokeapi.co/api/v2/
// para que nos devuelva los pokemones con limite de 20
// pokemones: https://pokeapi.co/api/v2/pokemon/


// esto es una promesa-> nos devuelve los datos en formato en tipo JSON
// https://pokeapi.co/api/v2/pokemon/


//uso de fetch para leer apis
fetch('https://pokeapi.co/api/v2/pokemon/')
  // espera una promesa
  // dentro de los parentesis del .then() -> colocamos una respuesta
  .then((res) => {
    //retoro la respuesta en formato JSON
    return res.json() // lo transformo en JSON
  })
  //otro then porque tenemos que obtener esa data
  .then( (data) => {
    //console.log(data.results) // aqui podemos obtener todo el array de objetos
    //recorremos el array de objetos
    data.results.forEach(element => {
       console.log(element.name) // para mostrar solo los nombres de los pokemones
    });
  })
  // si hay un error en la promesa capturamos el error con el .catch
  .catch(error => {
    console.log(error) // este error viene del backend
  })
