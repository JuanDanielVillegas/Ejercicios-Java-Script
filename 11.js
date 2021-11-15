let numero;
process.stdout.write("Ingresa un número: ");

process.stdin.on('data', function(data){
    numero = data.toString().trim();
    let num = parseInt(numero);
    parImapar(num);
    process.exit();
});

function parImapar(num){
    let cantidad = 0;
    for(let i = 1; i<=num; i++){
        if((i%3)==0){
            cantidad += 1;
            console.log(i);
        }
    }
    console.log("Cantidad de multiplos de 3:", cantidad)
}
