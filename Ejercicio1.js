// PRACTICA 1

// Declaramos las varibleas necesarias
let palabras = [];
let palabra;

// Pedimos las palabras al usuario
while (true) {
  palabra = prompt('Introduce una palabra o deja vacío terminar');

  // Si el usuario cancela o deja el campo vacio terminamos el bucle
  if (palabra === null || palabra === '') break;

  // Añadimos la palabra al array
  palabras.push(palabra);
}

// Eliminamos palabras duplicadas y ordenar en orden inverso (Z a A)
// Paso 1: Eliminamos los duplicados utilizando con un Set
const unicas = [...new Set(palabras)];

// Paso 2: Ordenar las palabras en orden inverso
const ordenadas = unicas.sort((a, b) => {
  if (a < b) return 1; // Si a es menor que b, coloca b primero
  if (a > b) return -1; // Si a es mayor que b, coloca a primero
  return 0; // Si son iguales, no cambiar el orden
});

// Mostrar el resultado en pantalla
alert('Palabras ordenadas de la Z a la A:\n' + palabrasOrdenadas.join(', '));