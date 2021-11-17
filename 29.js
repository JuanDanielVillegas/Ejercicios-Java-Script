let dado1;
let dado2;
let contador=0;

function tirarDado(){
    return Math.floor(Math.random() * 7) + 1;
}

for(let i=0; i<100; i++){
    dado1=tirarDado();
    dado2=tirarDado();
    if(dado1+dado2==10){
        contador++;
    }
}
console.log("Cantidad de veces que sumaron diez: " + contador);