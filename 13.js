let cuentaDos=0;
let cuentaTres=0;

for(let i = 2; i<100; i++){
    if((i%2)==0){
        cuentaDos += 1;
        console.log(i, "Multiplo de 2");
    }
    if((i%3)==0){
        cuentaTres += 1;
        console.log(i, "Multiplo de 3");
    }
}
console.log("Cantidad multiplos de Dos:", cuentaDos);
console.log("Cantidad multiplos de Tres:", cuentaTres);
