let numero = 0;
let bandera = false;

mayorMenor();

function mayorMenor(){
    let cuenta = 0;
    let num = 0;
    let num2 = 0;
    let sumaMultiplos = 0;
    let multiplos = 0;
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
                
                if(((i+1)%2)==0){
                    console.log(i+1);
                    multiplos += 1;
                    sumaMultiplos += (i+1);
                }
            }
            console.log("Cantidad números multiplos de 2: ", multiplos);
            console.log("Suma de los Impares: ", sumaMultiplos);
            process.exit();
        }
        process.stdout.write("Ingresa el segundo número: ");    
    });
}
