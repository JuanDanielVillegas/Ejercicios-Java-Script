

function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    return a/b;
}

let cuenta=0;
let op = 0;
let a = 0;
let b = 0;
let bandera = false;
console.log("1.Suma");
console.log("2.Resta");
console.log("3.Multiplicacion");
console.log("4.Division");

process.stdout.write("Opción: "); 
process.stdin.on('data', function(data){  
    numero = data.toString().trim();
    cuenta +=1;
    switch(cuenta){
        case 1:
            op = parseInt(numero);
            process.stdout.write("Ingresa el primer numero: ");  
            break;
        case 2:
            a = parseInt(numero);
            process.stdout.write("Ingresa el segundo numero: ");        
            break;
        case 3: 
            b = parseInt(numero);
            bandera = true;
            break;
    }
    if(bandera==true){
        switch (op) {
            case 1:
                console.log("El resultado de la suma es: " + sumar(a,b));
                break;
            case 2:
                console.log("El resultado de la resta es: " + restar(a,b));
                break;
            case 3:
                console.log("El resultado de la multiplicacion es: " + multiplicar(a,b));
                break;
            case 4:
                console.log("El resultado de la division es: " + dividir(a,b));
                break;
        }
        process.exit();
    }   
});