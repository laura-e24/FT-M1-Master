"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true.
  Ejemplo:
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList {
   constructor() {
      this.head = null;
   }
   add(data) {
      // Se crea un nuevo nodo con el valor indicado por parámetro
      let node = new Node(data);
      // Guardamos el primer nodo en una variable
      let current = this.head;

      // Si la lista está vacía, el head será el nuevo nodo
      if (!current) {
         this.head = node;

         // Debo retornar ese nuevo nodo
         return node;
      }
      // Mientras sigan habiendo elementos en la lista...
      while (current.next) {
         // Establezco el nodo actual en el siguiente de la lista
         // para poder seguir recorriéndola
         current = current.next;
      }

      // El nuevo es insertado en la propiedad next del nodo actual
      current.next = node;
   }
   remove() {
      let current = this.head;

      if (!current)
         return null;
      else if (!current.next) {
         const aux = this.head;
         this.head = null;

         return aux.value;
      } else {
         // debo pararme en el ante ante último elemento para así
         // poder acceder al ante último y hacer que su next
         // sea null, es decir, eliminar su next (ùltimo nodo)
         while (current.next.next) {
            current = current.next;
         }

         let aux = current.next.value;
         current.next = null;

         return aux;
      }
   }
   search(x) {
      let current = this.head;
      if (!current)
         return null;

      while (current) {
         if (current.value == x)
            return current.value;
         if (typeof x === 'function' && x(current.value))
            return current.value;
         current = current.next;
      }

      return null;
   }
}

class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}






/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = []
}

HashTable.prototype.hash = function (i) {
  const string = i.split('')
  const totalSum = string.reduce((acc, curr) => {
    return +acc + curr.charCodeAt()
  }, 0)

  return totalSum % this.numBuckets
}

HashTable.prototype.set = function (key, value) {
  const hashedKey = this.hash(key)


  if (!this.buckets[hashedKey]) {
    // creo el objeto en la posición correspondiente,
    // ya previniendo futuras colisiones (????)
    this.buckets[hashedKey] = {}
  } 

  // defino que la posición 'key' de la
  // posición 'hash' es igual al value
  this.buckets[hashedKey][key] = value;
}

HashTable.prototype.get = function (key) {
  const hashedKey = this.hash(key);
  return this.buckets[hashedKey][key]
}

HashTable.prototype.hasKey = function (key) {
  const hashedKey = this.hash(key);
  return this.buckets[hashedKey].hasOwnProperty(key);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
