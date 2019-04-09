// Clases en ES6
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }
    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar(fn) {
        // var nombre = this.nombre
        // var apellido = this.apellido
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} y soy Desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mira, no sabia que eras Dev`)
    }
}

var sacha = new Persona('Sacha', 'Lif', 1.72)
var erika = new Persona('Eri', 'Lopez', 1.52)
var arturo = new Desarrollador('Arturito', 'Jamaica', 1.82)

sacha.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
