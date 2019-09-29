document.querySelector('#dolar').addEventListener('click', function() {
    obtenerDatos('dolar');
})
document.querySelector('#uf').addEventListener('click', function() {
    obtenerDatos('uf');
})
function obtenerDatos(valor) {
    let url = `https://mindicador.cl/api/${valor}`;
    let i = 0
    const api = new XMLHttpRequest();
    api.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText)
            console.log(datos.serie)
            let resultado = document.querySelector('#resultado')
            resultado.innerHTML = ''
            for (const item of datos.serie) {
                i++
                resultado.innerHTML += `<li>${item.fecha.slice(0,10)} | $ ${item.valor}<li>`
                if (i>10) {
                    break //Solo muestra los 10 primeros resultados
                }
            }
        }
    }
    api.open('GET', url, true)
    api.send()
}