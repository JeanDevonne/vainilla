const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const options = { crossDomain: true }
const onResponse = function(data) {
    console.log(`${data.url} Hola, yo soy ${data.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, options, onResponse)
}

// El asincroninsmo de JavaScript en su máximo esplendor.
// Los resultados no llegan en el orden en que son ejecutados.
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)
obtenerPersonaje(5)
obtenerPersonaje(6)
obtenerPersonaje(7)
obtenerPersonaje(8)
