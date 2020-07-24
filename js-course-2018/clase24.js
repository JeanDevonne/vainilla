// Herencia prototipal en Javascript
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

// 
Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

// Herencia
function Desarrollador (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre} y soy Desarrollador`)
}

var sacha = new Persona('Sacha', 'Lifzyc', 1.82)
console.log(sacha.soyAlto())