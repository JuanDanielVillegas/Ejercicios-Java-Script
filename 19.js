var numeroEntrada;
let cuenta = 0;
let h = 0;
let m = 0;
let s = 0;
let bandera = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function reloj() {
    while(true){
        s += 1;
        await sleep(1000);
        if(s==60){
            m += 1;
            s = 1;
            process.stdout.write(h + " : " + m + " : " + "  " + "\r");
        }
        if(m == 60){
            h += 1;
            m = 1;
            process.stdout.write(h + " : " + "  " + " : " + "  " + "\r");
        }
        if(h==24){
            h = 1;
            m = 1;
            s = 1;
        }
        process.stdout.write(h + " : " + m + " : " + s + "\r");
    }
}

process.stdout.write("Ingresa la hora: ");
process.stdin.on('data', function(data){  
    numero = data.toString().trim();
    cuenta +=1;
    switch(cuenta){
        case 1:
            process.stdout.write("Ingresa los minutos: "); 
            h = parseInt(numero);
            break;
        case 2: 
            process.stdout.write("Ingresa los segundos: "); 
            m = parseInt(numero);
            break;
        case 3: 
            s = parseInt(numero);
            bandera = true;
            break;
    }
    if(bandera==true){
        reloj();
    }   
});
