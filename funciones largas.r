// 1. Búsqueda de la palabra más larga
function palabraMasLarga(texto) {
    let palabras = texto.split(" "); // Divide el texto en palabras
    let palabraLarga = ""; // Inicializa la palabra más larga

    for (let palabra of palabras) {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    }
    return palabraLarga;
}

// Ejemplo de uso
console.log(palabraMasLarga("La programación es muy interesante")); // "programación"

// 2. Generación de un número aleatorio en un rango dado
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ejemplo de uso
console.log(numeroAleatorio(1, 10)); // Número aleatorio entre 1 y 10
