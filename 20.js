
let numero;
process.stdout.write("Ingresa un número: ");

process.stdin.on('data', function(data){
    numero = data.toString().trim();
    let num = parseInt(numero);
    let factorial = calcularFactorial(num);
    console.log("%d! = %d", num, factorial);
    process.exit();
});

function calcularFactorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}