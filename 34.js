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
let calificaciones = [1, 2,3,4,5,6,7,8,9,10];
let materia="";
process.stdout.write("Ingrese el nombre de la materia: "); 

process.stdin.on('data', function(data){  
    materia = data.toString().trim();
    for(let i = 0; i<10; i++){
        if(materias[i] == materia){
            process.stdout.write("La calificacion en " + materias[i] + " es de: " + calificaciones[i]); 
        }
    }
    process.exit();
});
