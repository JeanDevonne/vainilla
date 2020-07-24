//Convención, el nombre de una función constructora (prototipo o clase) debe iniciar con mayúscula
function Persona(nombre, apellido, altura, sexo) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

// Aquí no usar arrow functions ya que alteraríamos el this.
// Dentro de un arrow function this hace referencia a windows y no al objeto actual.
Persona.prototype.saludar = function () {
  console.log(`Hola, mellamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}

// Creación de las instancias
var eva = new Persona('Eva', 'Ferreyra', 1.75, 'female');
var sacha = new Persona('Sacha', 'Lifzyc', 1.85, 'male');
var wes = new Persona('Wes', 'Bos', 1.79, 'male');
var claudia = new Persona('Claudia', 'Hernandez', 1.81, 'female');
var lea = new Persona('Lea', 'Verou', 1.82, 'female');

eva.soyAlto()
sacha.soyAlto()
wes.soyAlto()
claudia.soyAlto()
lea.soyAlto()