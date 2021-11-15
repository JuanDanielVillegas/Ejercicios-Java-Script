let serie = [];
let numero = 0;
let flag = false;

mayorMenor();

function mayorMenor(){
    let cuenta = 0;
    let mayor=0;
    let menor=10000000;
    process.stdout.write("Ingresa un número: ");    
    process.stdin.on('data', function(data){  
        numero = data.toString().trim();
        let num = parseInt(numero);
        serie[cuenta] = num;
        cuenta +=1;
        if(cuenta==5){
            flag=true;
        }
        if(flag==true){
            for(let i=0; i<5; i++){
                if(serie[i]>mayor){
                    mayor = serie[i];
                }
                if(serie[i]<menor){
                    menor = serie[i];
                }
            }
            console.log("Número Mayor: ", mayor);
            console.log("Número Menor: ", menor);
            process.exit();
        }
        process.stdout.write("Ingresa un número: ");    
    });
}
