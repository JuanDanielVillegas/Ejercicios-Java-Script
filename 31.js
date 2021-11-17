

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

function factorial(numero){
    var total = 1; 
	for (i=1; i<=numero; i++) {
		total = total * i; 
	}
	return total; 
}

function tabla(numero){
    for(let i=1; i<=10; i++){
        console.log(numero+" x "+ i + " = "+ i*numero);
    }
}

let cuenta=0;
let op = 0;
let a = 0;
let bandera = false;
console.log("1.¿Es primo?");
console.log("2.Factorial");
console.log("3.Tabla de Multiplicar");

process.stdout.write("Opción: "); 
process.stdin.on('data', function(data){  
    numero = data.toString().trim();
    cuenta +=1;
    switch(cuenta){
        case 1:
            op = parseInt(numero);
            process.stdout.write("Ingresa un número: ");  
            break;
        case 2:
            a = parseInt(numero);
            bandera = true;     
            break;
    }
    if(bandera==true){
        switch (op) {
            case 1:
                esPrimo(a);
                break;
            case 2:
                console.log("El factorial es: " + factorial(a));
                break;
            case 3:
                tabla(a);
                break;
        }
        process.exit();
    }   
});