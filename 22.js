var frase;
var desplazamiento = "                    ";
var espacio = "";
process.stdout.write("Ingresa una frase: ");

process.stdin.on('data', function(data){
    frase = data.toString().trim();
    for(let i =0; i<5; i++){
        console.log(espacio, frase);
        espacio += desplazamiento;
    }
    process.exit();
});
