'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // si el array ya tiene length 1, corto la recursión
  if (array.length <= 1) return array;

  // debo obtener el pivote
  let pivote = array[0]

  // genero dos arrays en donde irán
  // a parar los elementos de la lista
  let a = []
  let b = []

  // itero sobre cada elemento para ir
  // pusheando los mayores y menores al pivote
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivote) a.push(array[i])
    else b.push(array[i])
  }

  // redefinimos a y b para que se les aplique la recursión
  // hasta que queden arrays de length 1
  a = quickSort(a)
  b = quickSort(b)

  return a.concat(pivote).concat(b)
}

function mergeSort (array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Una vez el array tenga length 1, dejo de
  // llamar a la fn, por tanto también dejo de dividir el array
  // y lo devuelvo tal como está, cortando la recursión
  if (array.length <= 1) return array;

  // Si el array tiene length mayor a 1 entonces debo dividirlo,
  // separando las mitades izquierda y derecha
  let a = array.slice(0, Math.floor(array.length / 2))
  let b = array.slice(Math.floor(array.length / 2))

  // array comienza vacío y ahí iré pusheando los valores ordenados
  array = []

  // a y b no son fijos, deben modificarse según el resultado que tenían inicialmente.
  // es decir, si a ó b dieron un array cuyo length es mayor a 1, tengo que volver a dividirlo,
  // por ende, los redefino con el resultado de su recursión
  a = mergeSort(a)
  b = mergeSort(b)

  // acá tengo que verificar si tanto a como b tienen elementos (más de 1).
  // si ambos tienen, paso a comparar sus elementos en posición 0
  // si no, continúo diviendo aquel que tenga más de 1
  while (a.length && b.length) {
    // posición 0 de a es menor que posición 0 de b?
    // si es así, pusheo al array el valor de a, removiéndolo de éste último,
    // quedando a vacío, por eso el shift (éste remueve el último elemento y lo retorna)
    if (a[0] < b[0]) {
      array.push(a.shift())
    } else {
      // si no, pusheo al array el valor de b en lugar de a y hago lo mismo que haría
      // en la condición anterior
      array.push(b.shift())
    }
  }

  // el array sobre el cual operamos ahora equivale a sí mismo (los elementos que ya tiene)
  // concatenado con a y con b
  array = array.concat(a, b)


  // finalmente, retorno el mismo array que recibimos como parámetro, pero
  // mutado de la forma correspondiente según cuánto valga en cada llamado.
  // por eso se utiliza recursión: para saber qué retorna mergeSort, debo
  // llamarla hasta que el array quede descompuesto en un sólo elemento, 
  // a partir del cual se lo retornará sin más modificaciones 
  // (llegamos al caso base), y a partir de allí se van resolviendo 
  // todas las llamadas que se hicieron previamente, (las cuales quedaron 
  // en la pila, pero sin ser resueltas) hasta que finalmente obtengamos 
  // el array original completo y ordenado.
  return array;
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
