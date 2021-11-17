let numeroEntrada;
process.stdout.write("Ingresa un numero: ");

process.stdin.on('data', function(data){
    numeroEntrada = data.toString().trim();
    let numero = parseInt(numeroEntrada);
    for(let i=1; i<=10; i++){
        console.log(numero+" x "+ i + " = "+ i*numero); 
     }
    process.exit();
});