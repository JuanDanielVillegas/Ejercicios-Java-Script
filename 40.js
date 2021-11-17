function ventasTotales(numero, vend) {
    let productos = [];
    for (let i = 0; i < numero; i++) {
        productos.push([]);
        for (let j = 0; j < 12; j++) {
            productos[i].push([]);
            let ventas = Math.floor(Math.random() * 5) + 1;
            for (let k = 0; k < ventas; k++) {
                productos[i][j].push({
                    vendedor: vendedores[Math.floor(Math.random() * vend.length)],
                    venta: Math.floor(Math.random() * 500)+1
                });
            }
        }
    }
    return productos;
}

let meses = ['Enero', 'Febrero','Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Agosto','Septiembre', 'Octubre','Noviembre', 'Diciembre'];
let vendedores = ['Daniel', 'Noemí', 'Alejandro']
let ventas = ventasTotales(4, vendedores);
ventas.forEach((producto, numero) => {
    console.log(`Ventas producto ${numero+1}`);
    producto.forEach((mes, numero) => {
        let total = mes.reduce((ac, current) => {
            return ac + current.venta
        }, 0);
        console.log(`${meses[numero]} : ${total}`);
    });
    console.log(" ");
});