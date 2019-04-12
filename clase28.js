const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const options = { crossDomain: true }
const onResponse = function(data) {
    console.log(`Hola, yo soy ${data.name}`)
}

$.get(lukeUrl, options, onResponse)