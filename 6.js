let numero;
process.stdout.write("Ingresa un numero: ");

process.stdin.on('data', function(data){
    numero = data.toString().trim();
    let num = parseInt(numero);
    imprime(num);
    process.exit();
});

function imprime(num){
    for(let i  = 1; i<=num; i++){
        console.log(i);
    }
}
