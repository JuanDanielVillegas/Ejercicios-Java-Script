var numeroEntrada;
process.stdout.write("Ingresa un número: ");

process.stdin.on('data', function(data){
    numeroEntrada = data.toString().trim();
    let numero = parseInt(numeroEntrada);
    if(numero >= 1){
        esPrimo(numero);
        process.exit();
    }
    else{
        console.log("El numero no es mayor o igual a la unidad");
        process.stdout.write("Ingresa un número: ");
    }
    
});

function esPrimo(numero){
    let primo = true;
    for(let i = 2; i < numero; i++){
        if(numero%i==0){
            primo = false;
        }
    }
    if(primo==true){
        console.log("El numero es primo");
    }
    else{
        console.log("El numero no es primo");
    }
}