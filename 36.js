let numero;
let matriz = new Array(4);
let matrizT = new Array(4);
function numAleatorio(){
  return Math.floor((Math.random()*100)+1);

}

for(let i=0; i<5; i++){
    matriz[i] = new Array(2);
    for(let j=0; j<5; j++){
        matriz[i][j] = numAleatorio();
    }
}

for(let i=0; i<5; i++){
  matrizT[i] = new Array(2);
  for(let j=0; j<4; j++){
    matrizT[i][j] = matriz[j][i];
    
  }
}

console.log("Matriz");
for(let i= 0; i<4; i++){
  console.log(matriz[i]);
}
console.log("Matriz Transpuesta");
for(let i= 0; i<5; i++){
  console.log(matrizT[i]);
}