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
  
  // bucle exterior que itera sobre todo el array
  for (let i = 0; i < array.length; i++) {
    // bucle interior que compara cada elemento entre sí
    // y modifica el array en consecuencia
    array.forEach((elem, index, arr) => {
      // si el elemento actual es mayor al siguiente
      // los intercambio
      if (elem > arr[index + 1]) {
        // primero guardo los valores antes de intercambiarlos
        let curr = elem
        let next = arr[index + 1]
        // el actual pasa al siguiente
        arr[index] = next
        // el siguiente pasa al actual
        arr[index + 1] = curr
      }
    });
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // el insertionSort toma de referencia al segundo elemento 
  // de la lista, lo compara con su anterior (izquierda)
  // e inserta por delante el menor valor de los dos
  
  // 1) necesito una variable para ir recorriendo el array (referencia)
  // 2) necesito otra variable que tome el valor anterior a la referencia,
  //    de modo que podamos comparar el segundo elemento con el primero
  
  // la variable i sería el segundo elemento que tomamos de referencia
  for (let i = 1; i < array.length; i++) {
    // j es el elemento anterior a la referencia
    let j = i - 1;
    // guardamos la posición i del array para poder comparar
    // con su anterior (j) en cada iteración
    let aux = array[i];

    // mientras que j esté dentro del array y que la 
    // posición j (anterior) sea mayor que la posición i (referencia)...
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }

  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    let aux = array[i]
    array[i] = array[min]
    array[min] = aux
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
