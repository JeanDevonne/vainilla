var jean = {
    nombre: 'Jean',
    apellido: 'Devonne',
    edad: 20
}

var sasha = {
    nombre: 'Sasha',
    apellido: 'lifzyc',
    edad: 28
}

function imprimirNombreEnMayusculas (persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(jean)
imprimirNombreEnMayusculas(sasha)

function imprimirNombreYEdad (persona) {
    // Hola, me llamo Jean y tengo 20 años
    // Hola, me llamo Sasha y tengo 28 años
    var { nombre , edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}
imprimirNombreYEdad(jean)
imprimirNombreYEdad(sasha)


// Tener cuidado al pasar un objeto "persona" como parámetro
// de una función, ya que si el objeto sufre cambios dentro 
// de la función, estos cambios afectaran al objeto.
// Lo recomendable será retornar un nuevo objeto modificando
// lo necesario y mantener el objeto original sin modificaciones
function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}