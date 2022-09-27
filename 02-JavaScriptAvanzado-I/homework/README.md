
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // error - not defined
foo();
function foo() { console.log('Hola!'); } // Hola!
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco --> la variable del if sobreescribe a la anterior, ya que son var y tienen el mismo nombre. con let esto no ocurre, da un error. ES POR LA DIFERENCIA DE SCOPE
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
// ** IMPORTANTE **: Si hay una suma de strings, se concatenan. El resto de las operaciones (resta, mult, div) NO ESTÁN DEFINIDAS PARA STRINGS,
// por lo que JS intenta castear los valores a números para poder realizar esas operaciones.
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45" ---> primero concatena el '$' con el 4, quedando hecho string, por lo que luego concatena también el 5
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
{}[0] // [0]
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 23 ---> concatena los 3 en string, luego los castea a Number y resta el 10
3>2>1 // false ---> 3 > 2 ? true => true > 1 ? false
[] == ![] // true ---> el igual NO estricto intenta castear los valores para forzar a que se cumpla la igualdad. Entonces tenemos:
// Number([]) == Number(![]) => ambos dan 0, por lo que 0 == 0 es true.
// El igual estricto NO castea, compara valor y tipo de dato, entonces tendríamos un ARRAY siendo igualado a un BOOLEANO porque
// el operador NOT (!) castea a booleano. Por tanto: [](array) === ![](booleano) => es false. Tienen mismo valor pero != tipo de dato
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined ---> porque es usada ANTES de su declaración
   console.log(foo()); // 2 ---> porque gracias al hoisting, las funciones pueden ser leídas antes de su declaración

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // Meow Mix ---> porque al ser "food" igual a false, no se ejecuta el if, y la función retorna la variable global de snack
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa ---> aquí 'this' refiere a su contexto local del objeto 'prop', dentro del objeto 'obj'

var test = obj.prop.getFullname; 

console.log(test()); // undefined ---> porque las funciones se invocan colocando paréntesis???
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // PRIMERO, porque se ejecuta instantáneamente al estar al principio
   setTimeout(function() { console.log(2); }, 1000); // ÚLTIMO, ya que debió esperar 1 segundo para ejecutarse
   setTimeout(function() { console.log(3); }, 0); // TERCERO, ya que los 0 milisegundos indican que debe ejecutarse si no hay otra tarea en la cola
   console.log(4); // SEGUNDO, ya que las demás líneas aún esperan ser completadas mientras que ésta lo hace instantáneamente luego de la primera
}

printing();
``` 
