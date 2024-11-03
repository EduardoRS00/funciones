var contador = 0;

(function () {
  contador++;
})();

console.log(contador); // Resultado: 1

// ---------------------

(function (cadena, numero) {
  let string = cadena + ' ' + numero;
  console.log(string);
})('hola, tienes: ', 25);

// ------------------

const funcion = (numero) => numero % 2 === 0;

console.log(funcion(2));

//  -----------

let array = [2, 3, 4, 5, 6, 7, 89, 1];

function iterativo(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

console.log(iterativo(array));


function sumaRecursiva(array, indice = 0) {
    // Caso base: si el índice es igual o mayor que la longitud del array, regresamos 0
    if (indice >= array.length) {
        return 0;
    }

    // Llamada recursiva: suma el elemento actual con la suma de los siguientes
    return array[indice] + sumaRecursiva(array, indice + 1);
}

console.log("Suma recursiva:", sumaRecursiva(array)); // Resultado: 15



// -------------

const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 }
];

function incrementar(array) {
    array.forEach(element => {
        element.precio *= 1.10; // Incrementa el precio en un 10%
    });
    return array; // Devuelve el array que se pasó como argumento
}
const productosincrementados = incrementar(productos);
console.log(productosincrementados); // Muestra el resultado en la consola



//----------------
const personas = [ { nombre: "Juan", edad: 17 }, 
    { nombre: "Ana", edad:22 }, 
    { nombre: "Pedro", edad: 19 }, 
    { nombre: "Laura", edad: 16 } 
];
    
const personafiltradas = personas.filter(persona => persona.edad > 18);
const edades = personas.map(persona => persona.edad);
const total = edades.reduce((suma, precio)=> suma + precio, 0);
const totales = total * 2;

console.log("total = " + totales);