function numeroAleatorio() {
    return Math.floor(Math.random() * 2) + 0;
}

function moneda(){
    let resultado=numeroAleatorio();
    console.log(resultado);
    if (resultado==1){
        return "cara";
    }
    else{
        return "cruz";
    }
}

console.log(moneda());