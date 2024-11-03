// PRACTICA 2

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

// contamos las palabras y devolvemos un mapa
const contarPalabras = (array) => {
  const mapaPalabras = new Map();

  array.forEach((palabra) => {
    // Si la palabra ya está en el mapa, incrementamos el contador
    if (mapaPalabras.has(palabra)) {
      mapaPalabras.set(palabra, mapaPalabras.get(palabra) + 1);
    } else {
      // Si no está, la agregamos con un contador inicial de 1
      mapaPalabras.set(palabra, 1);
    }
  });

  return mapaPalabras;
};

// Contamos las palabras
const resultados = contarPalabras(palabras);

// Mostramos los resultados
let resultadoTexto = 'Conteo de palabras:\n';
resultados.forEach((valor, clave) => {
  resultadoTexto += `${clave}: ${valor}\n`;
});

// Usamos alert para mostrar los resultados
alert(resultadoTexto);