console.log('Hola Mundoo original !!!!!!')

let esSuperman:boolean = true;
let esBatman:boolean;
let esAquaman:boolean = true;

if (esSuperman) {
    console.log('Estamos salvados')
} else {
    console.log('moriremos ')
}

// orden del if segun la asignacion nueva para 
//esSuperman varia el resultado

esSuperman= convertirClark()

if (esSuperman) {
    console.log('Estamos salvados')
} else {
    console.log('moriremos ')
} 

function convertirClark(){
    return  false 
}

let villanos:number = 1;
let avengers:number = 5;
let otros = 2;

if (avengers > villanos) {
    console.log('Estamos Salvadoss todos');
} else {
    console.log('Moriremos todos')
}

// Strings + concat

let flash:string = 'batman';
let linternaVerde:string = 'linterna Verde'
let volcanNegro:string = 'volcan Negro'

console.log(flash)
console.log(linternaVerde)
console.log(volcanNegro)

let concat:string = `Los super heroes son: ${flash}, ${linternaVerde}, ${volcanNegro}`

console.log(concat)

// Tipo ANY

let vengador;
let existee;
let derrotas;

vengador = 'Dr Strange'

console.log( vengador.charAt(0) )

vengador = 12332.222

console.log(vengador.toFixed())

vengador = true 

console.log(vengador.valueOf()) 


// Arreglo - Array

let arreglo:number[] = [1,2,3,4,5,6];

let malos:string[] = ['Dormamu','Ultron','Thanos']

// Tuplas - Tuple Arreglo de varios tipos de dato

let tupla: [string,number,boolean] = ['Andres', 31, true ]

console.log(tupla)

// Enumeraciones
// Acepta operaciones matematicas entre las mismas declaraciones
// pero respeta el orden en el que estan.

enum Volumen{
    min = 1,
    max = 120,
    medio = max / 2
}

let audio:number = Volumen.medio

console.log(audio)

console.log(Volumen)

// Tipo Never, utilizar para destacar un punto que el codigo nunca debe alcanzar.
/* function error(mensaje:string):never {

    throw new Error(mensaje);

} 

error('Error critico..');
*/

// Asersion de tipo de valor

let cualquierValor:any = 'Cualquier cosa acá'

let largoString:number = (<string>cualquierValor).length

console.log(largoString)


//Funciones

let heroe:string = 'Flash';

function imprime_heroe():string{
    return heroe
}

let batisenal = function():string {
    return 'Batiseñal activada.';
}

console.log(imprime_heroe())
console.log(batisenal())

// Parametros obligatorios en funciones

function datos( nombre:string, apellido:string, edad:number):string{
    return nombre + ' ' + apellido + ' ' + edad
}

let userInfo = datos('Andres','Rodriguez', 31)

console.log(userInfo)

// Parametros opcionales en funciones, se utiliza el simbolo '?' para hacer un parametro opcional en la funcion

function nombreCompleto( nombre:string, apellido?:string ):string {
    if (apellido) {
        return nombre + ' ' + apellido
    }else {
        return nombre
    }
}

let nombre = nombreCompleto('Andres');

console.log(nombre)

// Parametros por defecto en funciones. Se utiliza para parametrizar algunos aspectos como estandar.

function miNombre(
    nombre:string, apellido:string, capitalizado:boolean = true){

        if (capitalizado) {
            return capitalizar(nombre) + ' ' + capitalizar(apellido);
        }else{
            return nombre + ' ' + apellido;
        }
    }

function capitalizar(palabra:string):string{
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

var nombreCapitalizado = miNombre('andres', 'daniel')

console.log(nombreCapitalizado);

// Parametros REST. deMasParametros se utiliza para recibir x cantidad de parametros restantes y poderlos manejar como sean necesarios.
// En este ejemplo se recogen y se concatenan 

function nombreHeroes(nombre:string, ...deMasParametros:string[]):string{
    
        for (let parts of deMasParametros) {
            var capitalized:string = parts.charAt(0).toUpperCase() + parts.substr(1).toLowerCase()
            
            console.log(capitalized)
        }

        return capitalizar(nombre) + ' ' + deMasParametros.join(' ')
    }
    
    let superMan = nombreHeroes('clark','joseph','kent','daniel')
    let ironMan = nombreHeroes('tony','antonio','stark')

    console.log(superMan)
    console.log(ironMan)
    




// Parametros - Filtrado para variables tipo Funcion. Se utiliza para restringir una variable a un solo tipo de funcion, ya sea numero, string etc.

function suma(a:number,b:number){
    return a + b;
}

function saludar(nombre:string):string{
    return "I'm " + nombre;
}

function salvarMundo():void{
    console.log('Mundo a salvo')
}

// Asignacion de tipo de parametro Numero para la funcion, se pueden colocar cualquier tipo de valor para alterar.
let myFunction: (a:number,b:number) => number;

//myFunction = 10;

myFunction = suma;
console.log( myFunction(2,2));

/* myFunction = saludar;
console.log( myFunction('Andres')); */

/* myFunction = salvarMundo;
myFunction() */


let myFunction2: (n:string) => string;

myFunction2 = saludar
console.log( myFunction2('asd'))
