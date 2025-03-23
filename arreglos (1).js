let nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis", "Juan"];
let nombresUnicos = [...new Set(nombres)];

console.log(nombresUnicos); // ["Ana", "Luis", "Pedro", "Juan"]

let notas = [8.5, 9.0, 7.5, 6.0, 10.0, 5.5];
notas.sort((a, b) => a - b);

let notasSinExtremos = notas.slice(1, -1);
let promedio = notasSinExtremos.reduce((a, b) => a + b, 0) / notasSinExtremos.length;

console.log("Notas excluidas:", notas[0], "y", notas[notas.length - 1]);
console.log("Promedio final:", promedio);

let numeros = [0, -2, 5, 3, 0, -7, 9];
let positivos = numeros.filter(n => n > 0).length;
let negativos = numeros.filter(n => n < 0).length;
let ceros = numeros.filter(n => n === 0).length;

console.log("Positivos:", positivos);
console.log("Negativos:", negativos);
console.log("Ceros:", ceros);

let datos = [1, 2, 3, 4, 5, 6];
let rotado = [datos[datos.length - 1], ...datos.slice(0, -1)];

console.log(rotado); // [6, 1, 2, 3, 4, 5]

let secuencia = [2, 4, 6, 6, 9];
let esAscendente = secuencia.every((val, i, arr) => i === 0 || val >= arr[i - 1]);

console.log(esAscendente); // true

let a = ["a", "b", "c"];
let b = [1, 2, 3];
let intercalado = a.flatMap((val, i) => [val, b[i]]);

console.log(intercalado); // ["a", 1, "b", 2, "c", 3]

let palabras = ["computadora", "mesa", "silla", "mouse"];
let vocales = palabra => palabra.match(/[aeiou]/gi).length;

palabras.forEach(palabra => {
    console.log(⁠ ${palabra}: ${vocales(palabra)} vocales ⁠);
});

let numeros = [1, 2, 0, 3, 4, 5, 0, 6, 7, 8];
let subarreglo = [];
let temp = [];

for (let num of numeros) {
    if (num !== 0) {
        temp.push(num);
    } else {
        if (temp.length > subarreglo.length) {
            subarreglo = temp;
        }
        temp = [];
    }
}

if (temp.length > subarreglo.length) {
    subarreglo = temp;
}

console.log(subarreglo); // [3, 4, 5]

let palabras = ["sol", "ventilador", "mesa", "lámpara", "computadora"];
let palabrasLargas = palabras.filter(palabra => palabra.length > 5);

console.log(palabrasLargas); // ["ventilador", "lámpara", "computadora"]

let datos = [3, 5, 3, 2, 3, 2, 4, 5, 5, 5];
let conteo = {};

datos.forEach(num => {
    conteo[num] = (conteo[num] || 0) + 1;
});

let masRepetido = Object.keys(conteo).reduce((a, b) => conteo[a] > conteo[b] ? a : b);
let veces = conteo[masRepetido];

console.log(⁠ ${masRepetido} (${veces} veces) ⁠); // 5 (4 veces)