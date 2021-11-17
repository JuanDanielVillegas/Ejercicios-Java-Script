let numero;
//let matriz = new Array(4);
function numAleatorio(){
  return Math.floor((Math.random()*100)+1);

}

for(let i=0; i<4; i++){
    //matriz[i] = new Array(2);
    for(let j=0; j<5; j++){
        //matriz[i][j]  = numAleatorio();
        process.stdout.write(numAleatorio()+" ");

    }
    process.stdout.write(numAleatorio()+"\n");
}

//console.log(matriz);