let numero;
process.stdout.write("Ingresa un numero: ");

process.stdin.on('data', function(data){
    numero = data.toString().trim();
    let num = parseInt(numero);
    negativoPositivo(num);
    process.exit();
});

function negativoPositivo(num){
    if(num>0){
        console.log("El numero %d es Positivo", num);
    }
    else{
        console.log("El numero %d es Negativo", num);
    }
}
