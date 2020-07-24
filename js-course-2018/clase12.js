var jean = {
    nombre: 'Jean',
    apellido: 'devonne',
    edad: 20,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: true,
    guitarrista: false,
    drone: false
}
var juan = {
    nombre: 'Juan',
    edad: 14
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)
    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es Ingeniero')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.dj) {
        console.log('Dj')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
    if (persona.drone) {
        console.log('Piloto de Drone')
    }
}
imprimirProfesiones(jean)

const MAYORIA_DE_EDAD = 18

// Función anónima
// const esMayorDeEdad = function (persona) {
//     return persona.edad > MAYORIA_DE_EDAD
// }

// Usando arrow function
// const esMayorDeEdad = (persona) => {
//     return persona.edad > MAYORIA_DE_EDAD
// }

// Usando arrow function resumida, quitamos las llaves por que solo retornaremos algo
// const esMayorDeEdad = persona => persona.edad > MAYORIA_DE_EDAD

// Usando arrow function resumida, quitamos las llaves por que solo retornaremos algo
// Agregando desestructuración
const esMayorDeEdad = ({edad}) => edad > MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}
imprimirSiEsMayorDeEdad(jean)
imprimirSiEsMayorDeEdad(juan)

const esMenorDeEdad = (persona) => !esMayorDeEdad(persona)


function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    } else {
        console.log('ACCESO CONCEDIDO')
    }
}