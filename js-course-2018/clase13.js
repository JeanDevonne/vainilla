var jean = {
    nombre: 'Jean',
    apellido: 'Devonne',
    edad: 20,
    peso: 70
}

console.log(`Al inicio del año ${jean.nombre} pesa ${jean.peso} Kg`)

const INCREMENTO_PESO = .2
const DIAS_DEL_AÑO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const bajarDePeso = (persona) => persona.peso -= INCREMENTO_PESO

for (var i = 1; i<=DIAS_DEL_AÑO; i++) {
    var random = Math.random()
    if (random < 0.25) {
        aumentarDePeso(jean)
    } else if (random < 0.5) {
        bajarDePeso(jean)
    }
}

console.log(`Al final del año ${jean.nombre} pesa ${jean.peso.toFixed(1)} Kg`)