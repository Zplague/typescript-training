console.log('Hola Mundoo original !!!!!!');
var esSuperman = true;
var esBatman;
var esAquaman = true;
if (esSuperman) {
    console.log('Estamos salvados');
}
else {
    console.log('moriremos ');
}
// orden del if segun la asignacion nueva para 
//esSuperman varia el resultado
esSuperman = convertirClark();
if (esSuperman) {
    console.log('Estamos salvados');
}
else {
    console.log('moriremos ');
}
function convertirClark() {
    return false;
}
var villanos = 1;
var avengers = 5;
var otros = 2;
if (avengers > villanos) {
    console.log('Estamos Salvadoss todos');
}
else {
    console.log('Moriremos todos');
}
// Strings + concat
var flash = 'batman';
var linternaVerde = 'linterna Verde';
var volcanNegro = 'volcan Negro';
console.log(flash);
console.log(linternaVerde);
console.log(volcanNegro);
var concat = "Los super heroes son: " + flash + ", " + linternaVerde + ", " + volcanNegro;
console.log(concat);
// Tipo ANY
var vengador;
var existee;
var derrotas;
vengador = 'Dr Strange';
console.log(vengador.charAt(0));
vengador = 12332.222;
console.log(vengador.toFixed());
vengador = true;
console.log(vengador.valueOf());
// Arreglo - Array
var arreglo = [1, 2, 3, 4, 5, 6];
var malos = ['Dormamu', 'Ultron', 'Thanos'];
// Tuplas - Tuple Arreglo de varios tipos de dato
var tupla = ['Andres', 31, true];
console.log(tupla);
// Enumeraciones
// Acepta operaciones matematicas entre las mismas declaraciones
// pero respeta el orden en el que estan.
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["max"] = 120] = "max";
    Volumen[Volumen["medio"] = 60] = "medio";
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log(audio);
console.log(Volumen);
// Tipo Never, utilizar para destacar un punto que el codigo nunca debe alcanzar.
/* function error(mensaje:string):never {

    throw new Error(mensaje);

}

error('Error critico..');
*/
// Asersion de tipo de valor
var cualquierValor = 'Cualquier cosa acá';
var largoString = cualquierValor.length;
console.log(largoString);
//Funciones
var heroe = 'Flash';
function imprime_heroe() {
    return heroe;
}
var batisenal = function () {
    return 'Batiseñal activada.';
};
console.log(imprime_heroe());
console.log(batisenal());
// Parametros obligatorios en funciones
function datos(nombre, apellido, edad) {
    return nombre + ' ' + apellido + ' ' + edad;
}
var userInfo = datos('Andres', 'Rodriguez', 31);
console.log(userInfo);
// Parametros opcionales en funciones, se utiliza el simbolo '?' para hacer un parametro opcional en la funcion
function nombreCompleto(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
var nombre = nombreCompleto('Andres');
console.log(nombre);
// Parametros por defecto en funciones. Se utiliza para parametrizar algunos aspectos como estandar.
function miNombre(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return capitalizar(nombre) + ' ' + capitalizar(apellido);
    }
    else {
        return nombre + ' ' + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
var nombreCapitalizado = miNombre('andres', 'daniel');
console.log(nombreCapitalizado);
// Parametros REST. deMasParametros se utiliza para recibir x cantidad de parametros restantes y poderlos manejar como sean necesarios.
// En este ejemplo se recogen y se concatenan 
function nombreHeroes(nombre) {
    var deMasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        deMasParametros[_i - 1] = arguments[_i];
    }
    for (var _a = 0, deMasParametros_1 = deMasParametros; _a < deMasParametros_1.length; _a++) {
        var parts = deMasParametros_1[_a];
        var capitalized = parts.charAt(0).toUpperCase() + parts.substr(1).toLowerCase();
        console.log(capitalized);
    }
    return capitalizar(nombre) + ' ' + deMasParametros.join(' ');
}
var superMan = nombreHeroes('clark', 'joseph', 'kent', 'daniel');
var ironMan = nombreHeroes('tony', 'antonio', 'stark');
console.log(superMan);
console.log(ironMan);
// Parametros - Filtrado para variables tipo Funcion. Se utiliza para restringir una variable a un solo tipo de funcion, ya sea numero, string etc.
function suma(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvarMundo() {
    console.log('Mundo a salvo');
}
// Asignacion de tipo de parametro Numero para la funcion, se pueden colocar cualquier tipo de valor para alterar.
var myFunction;
//myFunction = 10;
myFunction = suma;
console.log(myFunction(2, 2));
/* myFunction = saludar;
console.log( myFunction('Andres')); */
/* myFunction = salvarMundo;
myFunction() */
var myFunction2;
myFunction2 = saludar;
console.log(myFunction2('asd'));
