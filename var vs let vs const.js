//////////////////////////////////////////////////////
/////////Diferencia de (var vs let vs const)//////////
//////////////////////////////////////////////////////

// var -> se puede cambiar el valor de una variable con el mismo nombre de variable

var edad = 10
var edad = 20
console.log(edad) // 20

// let -> no deja usar una variable con el mismo nombre
let edad = 10
let edad = 20
console.log(edad) // error

// solución
let edad = 10
edad = 20
console.log(edad) // 20

//////////////////CAMBIAR VALOR POR IF////////////////////////
var edad = 10
if(true){
    // aqui cambio el valor de mi variable de mi scope
    var edad = 20
    console.log(edad) // 20
}
console.log(edad) // 20

let edad = 10
    if(true){
        // aqui muere la variable cuando sale del scope
        let edad = 20
        console.log(edad) // 20
    }
console.log(edad) // 10

const edad = 10
    if(true){
        // aqui muere la variable cuando sale del scope
        const edad = 20
        console.log(edad) // 20
    }
console.log(edad) // 10
//////////////////////////////////////////////////

// MALA PRACTICA
var edades = [10,20,30]
var edades = [10,20,30,40]
console.log(edades) // [10,20,30,40]

let edades = [10,20,30]
edades = [10,20,30,40]
console.log(edades) //[10,20,30,40]


// CON CONST NO PODEMOS MODIFICAR SU VALOR SIEMPRE Y 
// CUANDO SEA UN OBJETO O ARRAY QUE SE ESTA MODIFICANDO
const edades = [10,20,30]
edades = [10,20,30,40]
console.log(edades) // no es valido

const edades = [10,20,30]
edades.push(40)
console.log(edades) //[10,20,30,40]


///////////////OBJETOS/////////////////////////

const persona = {
  nombre: 'juanito',
  edad: 20
}

persona.edad = 21 //edad:21
persona.pais = 'México' //pais: "Mexico"
console.log(persona) // { nombre: "juanito", edad: 21, pais: "Mexico"}

