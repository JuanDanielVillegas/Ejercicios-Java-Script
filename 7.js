let contadorFrase = 1;
let frase;
console.log("Frase 1");

process.stdin.on('data', function(data){
    contadorFrase += 1;
    console.log("Frase %d", contadorFrase);
    frase = data.toString().trim();
});
