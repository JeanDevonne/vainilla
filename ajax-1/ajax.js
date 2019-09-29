// AJAX
document.querySelector('#boton').addEventListener('click', traerDatos)
function traerDatos() {
    console.log('Datos')
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            response = this.responseText
            let datos = JSON.parse(response)
            console.log(datos)
            let res = document.querySelector('#res')
            res.innerHTML = ''
            // Ahora recorremos el Aray con un FOR OF
            for (const item of datos) {
                res.innerHTML += `
                    <tr>
                    <td>${item.titulo}</td>
                    <td>${item.artista}</td>
                    </tr>
                    `
            }
        }
    }
    xhr.open('GET', 'catalogo.json', true)
    xhr.send()
    
}