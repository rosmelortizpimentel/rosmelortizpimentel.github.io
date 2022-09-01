
function calcularDescuento(modelo) {
    let descuento = 0;
    switch (modelo) {
        case 'FORD FIESTA':
            descuento = 5;
            break;
        case 'FORD FOCUS':
            descuento = 10;
            break;
        default:
    }
    return descuento;
}
/*
let modelo = ["FORD FIESTA", "FORD FOCUS"];
let descuento = calcularDescuento(modelo[1]);
descuento>0?console.log("Descuento " + descuento + "%"):console.log("No tiene descuento");
console.log(`Sorry, we are out of ${expr}.`);
*/

