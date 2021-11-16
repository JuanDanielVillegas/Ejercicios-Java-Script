let cadenaEntrada;
let bandera = false;

contar();

function contar(){
    let cuenta = 0;
    let letra;
    let cadena;
    let cuentaLetras = [];
    process.stdout.write("Ingresa una frase: ");    
    process.stdin.on('data', function(data){  
        cadenaEntrada = data.toString().trim();
        cuenta +=1;
        if(cuenta==2){
            bandera=true;
            letra = cadenaEntrada;
        }else{
            cadena = cadenaEntrada;
        }
        if(bandera==true){
            for(let i = 0; i < cadena.length; i++) {
                if (cadena[i].toLowerCase() == letra){ 
                    cuentaLetras.push(i);
                }
            } 
            console.log("Cadena Ingresada", cadena);
            console.log("La letra: ", letra);
            console.log("Aparece %d veces", cuentaLetras.length);
            process.exit();
        }
        process.stdout.write("Ingresa la letra a buscar: ");    
    });
}
