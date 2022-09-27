'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let acumulador = num;
  let result = [1]

  if (acumulador < 1) return;
  else if (acumulador === 1) return [1];

  for (let i = 2; acumulador > 1;) {
    if (acumulador % i === 0) {
      acumulador = acumulador / i;
      result.push(i)
    } else i++;
  }

  return result;
}
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let sortedArray = array;
 
  for (let i = 1;i < array.length;i++) {
    array.forEach((val, index, arr) => {
      if (arr[i] < val) {
        sortedArray[index] = arr[i];
        arr[i] = val;
      } 
    })
  }

  return sortedArray;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
