const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -100];
console.log('Input:',input.toString());
const respuesta = [];
function agregarRespuesta(clave, valor) {
  respuesta.push({
    clave: clave,
    valor: valor.toString(),
  });
}

// MAP - Ejm. Valores elevados al cuadrado
const alCuadrado = input.map(numero => numero ** 2);
agregarRespuesta('Valores elevados al cuadrado', alCuadrado)

// FILTER - Ejm. Obtener los números mayores a 3
const filtrado = input.filter(numero => numero > 3);
agregarRespuesta('Filtro números > 3', filtrado)

//REDUCE: - Ejm. Suma total de los valores del arreglo
const sumaAcumulada = input.reduce((acumulado, actual) => (acumulado += actual), 0);
agregarRespuesta('Suma de TODOS los valores del arreglo', sumaAcumulada)

//FILTER + REDUCE: - Ejm. Suma los valores POSITIVOS del arreglo
const sumaAcumuladaPositivos = input.filter(numero => numero > 0).reduce((acumulado, actual) => (acumulado += actual), 0);
agregarRespuesta('Suma de valores POSITIVOS del arreglo', sumaAcumuladaPositivos)

//SOME: - Ejm. ¿Hay al menos un elemento par?
const encontrado = input.some(numero => numero % 2 === 0);
agregarRespuesta('¿Encontró al menos un elemento par?', encontrado)

//EVERY: - Ejm. ¿Todos son pares?
const todosCumplen = input.every(numero => numero % 2 === 0);
agregarRespuesta('¿Todos son pares?', todosCumplen)

// SPLIT - MAP- JOIN : Ejm. Abreviar Nombre
const nombre = 'Rosmel Ortiz Pimentel';
const abreviado1 = nombre.split(' ').map(dato=>dato.charAt(0)).reduce((acumulado,actual)=>acumulado+=actual,'');
const abreviado2 = nombre.split(' ').map(dato=>dato.charAt(0)).join('');
agregarRespuesta(`Abreviatura de ${nombre}`, abreviado1)

console.log('Respuesta',respuesta);


// OTROS MÉTODOS

// AGREGA un objeto al FINAL del  array
input.push(20);
// ELIMINA el objeto FINAL del array
input.pop();

// AGREGA un objeto al INICIO de array
input.unshift(10);
// ELIMINA un objeto al INICIO de array
input.shift();

// Retorna una copia de un parte del array (@param startIndex, @param numberElements)
input.slice(0,2);

// Retorna una copia de un parte del array (@param startIndex, @param numberElementsRemoved, @param newValues)
let originalArray = [10,20,30,40,50];
let deleted =originalArray.splice(1,3,-10,-20) // Retorna los elementos eliminados.
console.log('Splice (array original):',originalArray.toString());
console.log('Splice (elementos eliminados):',deleted.toString());

// Concatenar Arrays
const concat = input.concat([30,40,50]);
console.log('Concat:',concat.toString());
