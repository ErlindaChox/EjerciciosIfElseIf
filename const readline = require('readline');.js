const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nombres = [];
let calificaciones = [];
let promedios = [];
let aprobados = 0;
let reprobados = 0;

function ingresarNombre(callback) {
    rl.question('Nombre del estudiante: ', (nombre) => {
        nombres.push(nombre);
        callback();
    });
}

function ingresarNotas(callback) {
    let notas = [];
    let contador = 0;
    
    function pedirNota() {
        if (contador < 4) {
            rl.question(`Nota ${contador + 1}: `, (nota) => {
                nota = parseFloat(nota);
                if (isNaN(nota) || nota < 0 || nota > 10) {
                    console.log('Ingrese una nota válida (0-10).');
                    pedirNota();
                } else {
                    notas.push(nota);
                    contador++;
                    pedirNota();
                }
            });
        } else {
            calificaciones.push(notas);
            callback();
        }
    }
    pedirNota();
}

function calcularPromedio(notas) {
    let suma = notas.reduce((acc, nota) => acc + nota, 0);
    return (suma / notas.length).toFixed(2);
}

function registrarEstudiantes(num, contador = 0) {
    if (contador < num) {
        console.log(`\nEstudiante ${contador + 1}:`);
        ingresarNombre(() => {
            ingresarNotas(() => {
                let promedio = calcularPromedio(calificaciones[contador]);
                promedios.push(promedio);
                if (promedio >= 7) {
                    aprobados++;
                } else {
                    reprobados++;
                }
                registrarEstudiantes(num, contador + 1);
            });
        });
    } else {
        mostrarReporte();
    }
}

function mostrarReporte() {
    console.log('\nReporte de Calificaciones:');
    for (let i = 0; i < nombres.length; i++) {
        let estado = promedios[i] >= 7 ? '✅ Aprobado' : '❌ Reprobado';
        console.log(`${nombres[i]}: [${calificaciones[i].join(', ')}] - Promedio: ${promedios[i]} ${estado}`);
    }
    console.log('\nResumen general:');
    console.log(`${aprobados} estudiante(s) aprobado(s)`);
    console.log(`${reprobados} estudiante(s) reprobado(s)`);
    rl.close();
}

rl.question('¿Cuántos estudiantes desea registrar? ', (num) => {
    num = parseInt(num);
    if (isNaN(num) || num <= 0) {
        console.log('Ingrese un número válido de estudiantes.');
        rl.close();
    } else {
        registrarEstudiantes(num);
    }
});
