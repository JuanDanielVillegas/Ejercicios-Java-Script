let materias=[
    "Matemáticas",
    "Contabilidad",
    "Administración",
    "Música",
    "Cálculo",
    "Programación",
    "Física",
    "Quimica",
    "Dibujo",
    "Filosofia",
    " "
];
let sumCalif = 0;
let calificaciones = [];
cuenta = 0;
bandera = false;
console.log("Calificaciones");
process.stdout.write(materias[0] + " "); 
process.stdin.on('data', function(data){  
    calif = data.toString().trim();
    calificaciones[cuenta] = parseInt(calif);
    sumCalif += parseInt(calif);;
    process.stdout.write(materias[cuenta+1] + " "); 
    cuenta +=1;
    if(cuenta == 10){
        console.log(" ");
        console.log("La media de las calificaciones es: "+sumCalif/10);
        process.exit();
    }   
});
