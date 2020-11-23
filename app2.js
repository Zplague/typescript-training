// Tipos
var batman = "Bruce";
var superman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["aquaman"] = 0] = "aquaman";
    Fuerza[Fuerza["batman"] = 1] = "batman";
    Fuerza[Fuerza["flash"] = 5] = "flash";
    Fuerza[Fuerza["superman"] = 100] = "superman";
})(Fuerza || (Fuerza = {}));
var fuerzaFlash = Fuerza.flash;
var fuerzaSuperman = Fuerza.superman;
var fuerzaBatman = Fuerza.batman;
var fuerzaAcuaman = Fuerza.aquaman;
// Retorno de funciones
function actilet_batiseñal() {
    return 'activada';
}
function pedir_ayuda() {
    console.log('auxiliooo');
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
//utilizar conversion de funcion "toString() para pasar numero a string"
var poder2 = 100;
var largoDelPoder2 = poder2.toString().length;
console.log(largoDelPoder2);
