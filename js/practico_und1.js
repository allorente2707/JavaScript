//Actividad Práctica Adicional - JavaScript Unidad 1


/*1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”.*/

console.log(alert("Hello World!!"))


/*2. Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write).*/

document.write("Hello World!!");


/*3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5.*/

document.write(3+5);


/*4. Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario”.*/


let nombre = prompt("Ingresar nombre de usuario por favor:")
document.write("Hola", nombre)


/*5. Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números.*/


let num1 = prompt("Ingrese un numero:");
let num2 = prompt("Ingrese otro numero:");
document.write("La suma es: ", (parseInt(num1) + parseInt(num2)));

/*6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor.*/


let num3 = prompt("Ingrese un numero:")
let num4 = prompt("Ingrese otro numero:")
if (num3 > num4) {
    document.write(num3);
} else {
    document.write(num4);
}


/*7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.*/


let n1 = prompt("Ingrese un numero:")
let n2 = prompt("Ingrese otro numero:")
let n3 = prompt("Ingrese un nuevo numero:")

if (n1 > n2 && n1 > n3) {
    document.write(n1);
}   else if (n2 > n3) {
    document.write(n2);
}   else {
    document.write(n3);
}


//8. Escribe un programa que pida un número y diga si es divisible por 2.


let numero = prompt("Ingrese un numero:")
if (numero%2==0) {
    document.write(numero," es divisible por 2 o sea que es un numero par!")
} else {
    document.write(numero, " es no esdivisible por 2 o sea que es un numero impar!")
}


/*
var n1 = prompt("Escribe un número");
if (n1 % 2 === 0) {
document.write("Es divisible por 2");
} else {
document.write("No es divisible por 2");
}*/

/*9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
letra a*/

/*
let frase = prompt("tirame una frase")
let n = 0;

for(let i=0; i<frase.length; i++) {
    if(frase[i] == "a") {
        n++;
    }
    i++;
}

document.write("La letra a aparece ",n," veces")
*/



//10. Escribe un programa que pida una frase y escriba las vocales que aparecen.


let frase=prompt("Ingresar frase")
let vocal=0;
for(let j=0; j<frase.length; j++) {

    if(frase[j] == "a" || frase[j] == "e" || frase[j] == "i" || frase[j] == "o"  || frase[j]=="u") {
        vocal++;
    }
    j++;
}

console.log("Aparecen ",vocal," vocales");

/*
var text = prompt("Escribe una frase");
var nText = text.length;
var i;
for (i = 0; i < nText; i++) {
if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
document.write(text.substr(i,1);
}
}*/



/*11. Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales.*/

/*
let frase=prompt("Ingresar frase");

let vocal=0;

for(let j=0; j<frase.length; j++) {

    if(frase[j] === "a" || frase[j] === "e" || frase[j] === "i" || frase[j] === "o"  || frase[j] ==="u") {
        vocal++;
    }
    j++;
}

console.log("Aparecen ",vocal," vocales"); */



/*12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
cada una de las vocales.*/






/*13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro.*/

/*
let numero=prompt("Ingresar numero",);

if (numero%2==0 || numero%3==0 || numero%5==0 || numero%7==0) {
    console.log("Es divisible");
}
*/

/*14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
que decir todos por los que es divisible).*/

/*
let numero=prompt("Ingresar numero",);

if (numero%2==0 ) {
    console.log("Es divisible por 2");
}

if (numero%3==0 ) {
    console.log("Es divisible por 3");
}

if (numero%5==0 ) {
    console.log("Es divisible por 5");
}

if (numero%7==0 ) {
    console.log("Es divisible por 7");
}*/

/*
var n1 = prompt("Escribe un número");
if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
if (n1 % 2 === 0) {
document.write("Es divisible por 2. ");
}
if (n1 % 3 === 0) {
document.write("Es divisible por 3. ");
}
if (n1 % 5 === 0) {
document.write("Es divisible por 5. ");
}
if (n1 % 7 === 0) {
document.write("Es divisible por 7. ");
}
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}*/

/*15. Escribir un programa que escriba en pantalla los divisores de un número dado.*/

/*
let nro1 = prompt("Escribe un número");

for (let i=2; i < nro1/2; i++) {

  if (nro1%i == 0) {

      document.write(i," ,");
  }

}*/



/*16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados.*/

/*var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
var menor;
var i;
if (n1 < n2) {
menor = n1;
} else {
menor = n2;
}
for (i=2; i < menor / 2; i++) {
if (n1 % i === 0 && n2 % i === 0) {
document.write(i,", ");
}
}*/


/*17. Escribir un programa que nos diga si un número dado es primo (no es divisible
por ninguno otro número que no sea él mismo o la unidad).*/


/*
Solució 1
var n1 = prompt("Escribe un número");
var i;
var primer = true;
for (i=2; i < n1 / 2; i++) {
if (n1 % i === 0) {
primer = false;
}
}
if (primer) {
document.write("El número es primo");
} else {
document.write("El número no es primo");
}

Solució 2
var n1 = prompt("Escribe un número");
var i = 2;
while (n1 % i !== 0 && i < n1 / 2 ) {
i++;
}
if (n1 % i !== 0) {
document.write("El número es primo");
} else {
document.write("El número no es primo");
}*/


/*18. Pide la edad y si es mayor de 18 años indica que ya puede conducir.*/


/*19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente */


/*20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión´.*/


/*21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos.*/


/*22. Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente :
● El número debe ser entre 0 y 99999999
● Debemos calcular el resto de la división entera entre el número y el número
23.
● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
● Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».


/*23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 
1
22
333
4444
55555
666666
…….
*/

for (let i=2; i<=30; i++) {
    document.write((i," ,"));
}

/*24. Haz un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1
*/


/*25. Un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5
————————————————————
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10*/