//SIN USAR -> template string
const numero = (num) => {
  return ('El numero es: ' + num)
}
const resultado = numero(10)
console.log(resultado) // 10




// AQUI SE SE USA TEMPLATE STRING
// Template String (alt + 96) => ``
const numero = (num) => {
  return (`El numero es: ${num}`)
}
const resultado = numero(10)
console.log(resultado) // 10


const numero = (num1, num2) => {
  return (`El numero es: ${num1 + num2}`)
}
const resultado = numero(10,20)
console.log(resultado) // 30


// reduciendo codigo con template string
const numero = num => (`El numero es: ${num}`)
const resultado = numero(10)
console.log(resultado) // 10



