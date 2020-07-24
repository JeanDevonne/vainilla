// Event Loop

// Ejemlplo 1
console.log("A");
setTimeout(function() {
    console.log('B'), 2000
})
console.log("C");

// Ejemplo 2 (for i: bloquea el event loop)

setTimeout(()=>console.log('D'), 2000)
for (i = 0; i < 100000; i++) {
    console.log(i);
}