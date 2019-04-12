const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const options = { crossDomain: true }

// Para forzar a que los resultados se muestren en el orden en que los ejecutamos
// agregamos un nuevo parametro en la función obtenerPersonaje
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
    .get(url, options, callback)
    .fail(function() {
        console.log(`Sucedió un error: No se pudo obtener el personaje ${id}`)
    })
}

// Callback Hell(El infierno de los Callbacks) una mala practica
obtenerPersonaje(1, function(data) {
    console.log(`${data.url} Hola, yo soy ${data.name}`)
    obtenerPersonaje(2, function(data) {
        console.log(`${data.url} Hola, yo soy ${data.name}`)
        obtenerPersonaje(3, function(data) {
            console.log(`${data.url} Hola, yo soy ${data.name}`)
            obtenerPersonaje(4, function(data) {
            console.log(`${data.url} Hola, yo soy ${data.name}`)
            })
        })
    })
})
