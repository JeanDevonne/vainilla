//Convención, el nombre de una función constructora (prototipo o clase) debe iniciar con mayúscula
function Persona(nombre, apellido, altura, sexo) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  this.sexo = sexo
  // Esta sentencia añadida hace referencia a la función soyAlto()
  this.soyAlto = soyAlto
}

// La función soyAlto se usará como un método de los objetos Persona
function soyAlto() {
  var name = this.nombre
  var last_name = this.apellido
  var height = this.altura
  if (height >= 1.80){
    console.log(`Hola, soy ${name} ${last_name}, soy ${ this.sexo == 'female' ? 'alta' : 'alto' } y mido ${height} mts`)
  } else {
    console.log(`Hola, soy ${name} ${last_name}, soy ${ this.sexo == 'female' ? 'chaparrita' : 'chaparrito' } y mido ${height} mts`)
  }
}

// Creación de las instancias
var eva = new Persona('Eva', 'Ferreyra', 1.75, 'female');
var sacha = new Persona('Sacha', 'Lifzyc', 1.85, 'male');
var wes = new Persona('Wes', 'Bos', 1.79, 'male');
var claudia = new Persona('Claudia', 'Hernandez', 1.81, 'female');
var lea = new Persona('Lea', 'Verou', 1.82, 'female');

eva.soyAlto()       // Hola, soy Eva Ferreyra, soy chaparrita y mido 1.75 mts
sacha.soyAlto()     // Hola, soy Sacha Lifzyc, soy alto y mido 1.85 mts
wes.soyAlto()       // Hola, soy Wes Bos, soy chaparrito y mido 1.79 mts
claudia.soyAlto()   // Hola, soy Claudia Hernandez, soy alta y mido 1.81 mts
lea.soyAlto()       // Hola, soy Lea Verou, soy alta y mido 1.82 mts
