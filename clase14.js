var jean = {
    nombre: 'Jean',
    apellido: 'Devonne',
    edad: 20,
    peso: 70
}

console.log(`Al inicio del año ${jean.nombre} pesa ${jean.peso} Kg`)

const INCREMENTO_PESO = .3
const DIAS_DEL_AÑO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const bajarDePeso = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = jean.peso - 3
var dias = 0

while (jean.peso > META) {
    // debugger
    if (comeMucho()) {
        aumentarDePeso(jean)
    }
    if (realizaDeporte()) {
        bajarDePeso(jean)
    }
    dias++
}

console.log(`Pasaron ${dias} dias hasta que  ${jean.nombre} bajó 3Kg`)