function crearSaludo(finalDeFrase) {
    return function(nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoPeruano = crearSaludo('causa');
const saludoMexicano = crearSaludo('güey');
const saludoArgentino = crearSaludo('che');

saludoPeruano('Jean')
saludoMexicano('Jean')
saludoArgentino('Jean')