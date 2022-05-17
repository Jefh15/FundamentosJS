// Funciones de antes simples sin arguementos
function sumar () {
  console.log(10)
}
sumar()

// Funciones con parametros
function sumar (num1, num2) {
  console.log(num1 + num2)
}
sumar(10, 20)


// funciones de tipo flecha con parametros, aqui si le coloco los parentesis
const sumarDos = (num1, num2) => {
  console.log(num1 + num2)
}
sumarDos(10, 50)

// funciones de tipo flecha con parametros sin los ()
const sumarDos = num1 => {
  console.log(num1)
}
sumarDos(10)

// como solo tiene 1 parametro no le pongo los ()
const sumarDos = num1 => {
  return num1
}
console.log(sumarDos(10))


const sumarDos = num1 => num1
console.log(sumarDos(10))


// opcion de funcion con parametros
const sumar = (num1, num2) => {
  return 'la suma es: ' + (num1 + num2)
}
let resultado = sumar(10, 20)
console.log(resultado) // 30





// una opcion para aprender con funcion de flecha con reducion de codigo
// return automatico
const sumar = (num1, num2) => ( 'la suma es: ' + (num1 + num2) )
let resultado = sumar(10, 20)
console.log(resultado)



// le doy a un parametro con un valor por default si no lo envia
const sumar = (num1 = 10) => (
  'la suma es: ' + (num1 + 20)
)
let resultado = sumar()
console.log(resultado) //30
