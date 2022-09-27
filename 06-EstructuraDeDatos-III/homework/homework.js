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

function BinarySearchTree(value) { // 
  this.value = value; // 
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value){ // 7
  // if(!this.value) this.value = value; // {value: 2, left: {value: 1, left: null, right: null}, right: {value: 5, left: null, right: null}}

  if(value > this.value){
    if(!this.right){ // !this.right ---> this.right === null
      this.right = new BinarySearchTree(value) // 7
    }
    else {
      this.right.insert(value) // 7
    }
  }

  else {
    if(!this.left){
      this.left = new BinarySearchTree(value) // 
    }
    else {
      this.left.insert(value)
    }
  }
}


BinarySearchTree.prototype.contains = function(value){ // 7
  if(value === this.value) return true;

  if(value > this.value) {
    if(!this.right) return false; // !this.right ---> this.right === null
    else return this.right.contains(value); // 7
  }

  else {
    if(!this.left) return false; // !this.left ---> this.left === null
    else return this.left.contains(value);
  }
}



BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  //in-order => izquierda, nodo, derecha
  //pre-order => nodo, izquierda, derecha
  //post-order => izquierda, derecha, nodo

  if(order === 'in-order' || order === undefined){
    if(this.left && this.left.depthFirstForEach(cb, order));
    cb(this.value)
    if(this.right && this.right.depthFirstForEach(cb, order));
  }

  if(order === 'pre-order'){
    cb(this.value)
    if(this.left && this.left.depthFirstForEach(cb, order));
    if(this.right && this.right.depthFirstForEach(cb, order));
  }

  if(order === 'post-order'){
    if(this.left && this.left.depthFirstForEach(cb, order));
    if(this.right && this.right.depthFirstForEach(cb, order));
    cb(this.value)
  }

}


BinarySearchTree.prototype.breadthFirstForEach = function(cb, value = []){
  // value: []

  if(this.left) value.push(this.left)
  // []

  if(this.right) value.push(this.right)
  //[]

  cb(this.value) // [2, 1, 5, 7]

  if(value.length > 0){
    value.shift().breadthFirstForEach(cb, value) // {value: 7, left: null, right: null}
  }
}

BinarySearchTree.prototype.size = function(){
  // let counter = 1;

  // if(this.left) counter += this.left.size()
  // if(this.right) counter += this.right.size()

  // return counter

  if(!this.value) return null;

  if(!this.right && !this.left) return 1;

  if(this.left && !this.right) return 1 + this.left.size();

  if(!this.left && this.right) return 1 + this.right.size();

  if(this.left && this.right) return 1 + this.left.size() + this.right.size();
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};