//  Función que recibe un array y lo convierte a un objeto
let array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964],['jiji', 1992]];

function arrayToObject(A) {
    let R = {}
    for ( i=0; i<A.length; i++ ) {
        atributo = A[i][0]
        valor = A[i][1]
        // ['make', 'Ford']
        R[atributo] = valor
    }
    return R
}
console.log(arrayToObject(array));


// Función que recibe un objeto y lo convierte a Array
car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 2019,
    color: 'red'
}


function objecToArray(object) {
    var array2d = []
    properties = Object.keys(object)

    for (i=0; i<properties.length; i++) {
        array2d.push([properties[i],object[properties[i]]])
    }
    return array2d
}
console.log(objecToArray(car))