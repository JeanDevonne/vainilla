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

function imprimirNombreEnMayusculas ({nombre}) {
    console.log(nombre.toUpperCase());
}
imprimirNombreEnMayusculas(jean)
imprimirNombreEnMayusculas(sasha)