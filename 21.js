let sumaPares=0;
let sumaImpares=0;

for(let i = 2; i<1000; i++){
    if((i%2)==0){
        sumaPares += i;
        console.log(i, "Par");
    }
    else{
        sumaImpares += i;
        console.log(i, "Impar");
    }
}
console.log("Suma números Pares:", sumaPares);
console.log("Suma números Impares:", sumaImpares);