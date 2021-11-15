let letra;
process.stdout.write("Ingresa una letra: ");

process.stdin.on('data', function(data){
    letra = data.toString().trim();
    resolver(letra);
});

function resolver(letra){
   switch (letra){
        case 'S':
            process.stdout.write("Ingresa una letra: ");
            break;
        case 'N':
            process.stdout.write("Ingresa una letra: ");
            break;
        default:
            console.log("No es la letra S o N");
            console.log("Se cierra el programa");
            process.exit();     
   }
}