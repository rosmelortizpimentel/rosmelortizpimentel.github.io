/* 
1. Realizar un programa que calcule la suma de los divisores de n distintos de n 
*/

function sumarDividoresPositivos(numero) {
  let sumaDivisores = 0;
  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      sumaDivisores += i;
    }
  }
  return sumaDivisores;
}
let numerongresado = 220; // parseInt(prompts("Ingrese un Número"),10);
let sumaDivisores = sumarDividoresPositivos(numerongresado);
console.log(
  sumaDivisores === 0
    ? `${numerongresado} no tiene divisores.`
    : `Suma de divisores de ${numerongresado} = ${sumaDivisores}`
);

/*
2- Dos números son amigos, si cada uno de ellos es igual a la suma de los divisores del otro.
Por ejemplo. 220 y 284 son amigos, ya que:
Suma de divisores de 284 : 1+2 + 4 + 71 + 142 = 220
Suma de divisores de 220: 1 + 2 + 4 + 5 + 10 + 11 +20 + 22 + 44 + 55 + 110 = 284
Diseñe un algoritmo que muestre todas las parejas de números amigos menores o iguales que m, siendo m un número introducido por teclado.
*/

function buscarNumerosAmigos(numero) {
  let numerosAmigos = [];
  for (let i = 1; i <= numero; i++) {
    let sumaDivisores = sumarDividoresPositivos(i);
    // Se pretende obtener un objeto de este tipo: { numero: 220, sumaDivisores: 284, sumaDivisoresDeDivisores: 220 }
    if (sumaDivisores <= numero) {
      let sumaDivisoresDeDivisores = sumarDividoresPositivos(sumaDivisores);
      if (i === sumaDivisoresDeDivisores && i !== sumaDivisores) {
        numerosAmigos.push({
          numero: i,
          sumaDivisores: sumaDivisores,
          sumaDivisoresDeDivisores: sumaDivisoresDeDivisores,
        });
      }
    }
  }
  return numerosAmigos;
}

let numerongresado2 = 3000; // parseInt(prompts("Ingrese un Número"),10);
let numerosAmigos = buscarNumerosAmigos(numerongresado2);

console.log("******************* PROCESAMIENTO *******************");
console.log(numerosAmigos);
console.log("******************* PROCESAMIENTO *******************");

console.log("******************* RESULTADO *******************");
numerosAmigos.forEach((element) => {
  console.log(
    "Número: ",
    element.numero,
    "Suma Divisores: ",
    element.sumaDivisores
  );
});
