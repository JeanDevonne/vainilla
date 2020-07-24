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

function imprimirSiEsMayorDeEdad(persona) {
    persona.edad > 17 ? console.log(`${persona.nombre} es mayor de edad`) : console.log(`${persona.nombre} es menor de edad`)
}
imprimirSiEsMayorDeEdad(jean)