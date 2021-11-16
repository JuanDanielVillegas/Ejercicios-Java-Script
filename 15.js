let numero = 0;
let bandera = false;

mayorMenor();

function mayorMenor(){
    let cuenta = 0;
    let num = 0;
    let num2 = 0;
    let sumaImpares = 0;
    let cuentaPares = 0;
    let naturales = 0;
    process.stdout.write("Ingresa el primer número: ");    
    process.stdin.on('data', function(data){  
        numero = data.toString().trim();
        cuenta +=1;
        if(cuenta==2){
            bandera=true;
            num2 = parseInt(numero);
        }else{
            num = parseInt(numero);
        }
        if(bandera==true){
            for(let i=num; i<num2-1; i++){
                naturales += 1;
                if(((i+1)%2)==0){
                    console.log(i+1, "Par");
                    cuentaPares += 1;
                }
                else{
                    console.log(i+1, "Impar");
                    sumaImpares += i+1;
                }
            }
            console.log("Cantidad números naturales: ", naturales);
            console.log("Cantidad números Pares: ", cuentaPares);
            console.log("Suma de los Impares: ", sumaImpares);
            process.exit();
        }
        process.stdout.write("Ingresa el segundo número: ");    
    });
}
