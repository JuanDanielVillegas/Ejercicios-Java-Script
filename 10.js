let numero;
process.stdout.write("Ingresa un número: ");

process.stdin.on('data', function(data){
    numero = data.toString().trim();
    let num = parseInt(numero);
    parImapar(num);
    process.exit();
});

function parImapar(num){
    if((num%2) == 0){
        console.log("El número %d es Par", num);
    }
    else{
        console.log("El número %d es Impar", num);
    }
}
