// Sesión 4 - String (Cadena de caracteres)

let str = "Hola soy un texto con comillas simples"  //Alt + 39
let str_dbl = "Hola soy un texto con comillas dobles"



console.log(str)
console.log(str_dbl)

let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\""
let str_comillas_simples = "El otro día me dijo literalmente \"ve a sacar la basura\""
let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'"

console.log(str_comillas)
console.log(str_comillas_simples)
console.log(str_comillas_dobles)

/////// Comillas invertidas (backticks)

let str_backticks = "Hola esto es un string con backticks"

console.log(str_backticks)

let nombre = "Nikolai"
let saludo = `Hola, ${nombre} Bienvenido`

console.log(saludo)

//las comillas invertidas permiten introducir variables dentro del texto
// Utilizado en frameworks como Angular

// Plantillas HTML

let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p> Este es un parrafo</p>
</html>
`

console.log(plantilla)


//// Introducción de variables en html

let libros = ["Empieza por el por qué", "El monje que vendio su Ferrari", "El poder del ahora"]