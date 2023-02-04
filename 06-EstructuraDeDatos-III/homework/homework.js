"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  // El árbol y todos sus subárboles estarán compuestos
  // así: del valor del nodo + los subárboles/nodos
  // que tenga a sus lados
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function() {

  // si no hay nodo raíz, el árbol no tiene size
  if (!this.value) return null;

  // si no hay ni left ni right significa que sólo
  // tengo la raíz, por lo cual su size es 1
  if (!this.right && !this.left) return 1;

  // si sólo tengo uno de los lados, el size es igual
  // al nodo ra´íz + el size de la rama que tengo
  if (this.left && !this.right) return 1 + this.left.size();
  if (!this.left && this.right) return 1 + this.right.size();

  // si tengo ambas ramas, el size es igual al nodo raíz
  // más el size de ellas dos
  if (this.left && this.right) return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.insert = function(value) {
  // creo un subárbol con el valor que quiero insertar
  let subTree = new BinarySearchTree(value)

  // si el valor a insertar es mayor a la raíz, el nuevo subárbol irá
  // a la derecha
  if (value > this.value) {
    // si no tengo right, lo redefino con
    // dicho subárbol creado
    if (!this.right) { 
      this.right = subTree
    }
    // caso contrario, lo inserto en el right
    else {
      this.right.insert(value)
    }
  }
  // si el valor a insertar es menor a la raíz, el nuevo subárbol irá
  // a la izquierda
  else {
    // si no tengo left, lo redefino con
    // dicho subárbol creado
    if (!this.left) {
      this.left = subTree
    }
    // caso contrario, lo inserto en el left
    else {
      this.left.insert(value)
    }
  }
}

BinarySearchTree.prototype.contains = function(value) {
  
  // primero evaluamos si el valor está en la raíz
  if (value === this.value) return true;

  // si no, evaluamos si es mayor o menor, así
  // sabemos en qué rama del árbol buscar el valor
  if (value > this.value) {
    // si es mayor, debemos buscar en la derecha,
    // entonces si no hay right, ese valor no estará allí
    if (!this.right) return false;
    // de lo contrario, buscamos si está en dicha rama o no
    else return this.right.contains(value)
  } else {
    // si es menor, debemos buscar en la izquierda
    // siguiendo el procedimiento anterior
    if (!this.left) return false;
    else return this.left.contains(value)
  }


}
BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
  if (!order || order === 'in-order') { // left - root - right
    // comienzo recorriendo la rama izquierda
    if (this.left) this.left.depthFirstForEach(cb, order)
    // paso por la raíz
    cb(this.value)
    // finalmente recorro la rama derecha
    if (this.right) this.right.depthFirstForEach(cb, order)
  }

  if (order === 'pre-order') { // root - left - right
    cb(this.value)
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (this.right) this.right.depthFirstForEach(cb, order)
  }

  if (order === 'post-order') { // left - right - root
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (this.right) this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) {
  // recorro la ra´íz
  cb(this.value)

  // si hay algo en left o right, los pusheo al array
  if (this.left) array.push(this.left)
  if (this.right) array.push(this.right)

  if (!!array.length) {
    // saco el primer elemento y le aplico la recursión
    array.shift().breadthFirstForEach(cb, array)
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};