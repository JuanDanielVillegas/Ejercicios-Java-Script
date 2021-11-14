let numImpares = 0;
for(let i=0; i<=100; i++){
    if(((i) % 2) != 0){
        numImpares += 1;
        console.log("El numero ", i, "es Impar");
    }
}
console.log("Hay %d numeros impares", numImpares);