
var frase;
process.stdout.write("Ingresa una frase: ");

process.stdin.on('data', function(data){
    frase = data.toString().trim();
    console.log("                        "+frase);
    process.exit();
});

