//Tema: Funciones


/*1. Realizar una función, a la que se le pase como parámetro un número N,
y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
curso Full Stack”*/

function mostrar(n) {
    
    for (i=1; i<=n; i++) {
        console.log("Bienvenidos al curso Full Stack"); 
    }
    
}
 mostrar(7)

/*2. Diseñar una función que tenga como parámetros dos números, y que
calcule el máximo.*/


// Puedo ingrar numeros iguales!
function max(nro1, nro2) {
    if (nro1 > nro2) {
        return nro1;
       
    } else {
        if (nro2 > nro1) {
            return nro2;
        } 
        return console.log("No hay maximo");
    }
    
}
console.log(max(100, 1))


// Ingresar dos numero no iguales por favor. Gracias!
function max2(nro1, nro2) {
    if (nro1>nro2) {
        return console.log(nro1);
    }
    return console.log(nro2);
    
}
max2(17,34)


//Si ingresas dos nemeros iguales pasa esto!
max2(3,3)


/*3. Crear una función que se llame promedio3, que reciba como
parámetro tres valores y devuelva el promedio de los mismos.*/

function promedio3(valor1, valor2, valor3) {
    let promedio = (valor1+valor2+valor3)/3;
    return console.log("El promedio de 3 estos tres numero es:", promedio);
    
}
promedio3(30, 90, 60)


function promedio32(valor1, valor2, valor3) {
    return (valor1+valor2+valor3)/3;
}
console.log(promedio32(37, 87, 19));


/*4. Crear una función que lea notas hasta que ingrese -1 y devuelve el
promedio de las notas leídas. ( aunque no se suele leer valores en una
función) Una función que se llame siguiente, que reciba como
parámetro un valor entero, y devuelva el siguiente del número
ingresado como parámetro.*/



function promedio() {
    let suma = 0;
    let cantidad = 0;
    let nota = parseInt(prompt("nota:", ));
    while (nota != -1) {
        suma+=nota;
        cantidad+=1;
        nota = parseInt(prompt("nota:", ));
    }

    if(cantidad !== 0) {

        return ((suma/cantidad));
    }
    else {
        return (0);
    }

}
console.log(promedio())




function siguiente(numero) {
    return numero+1;
    
}
console.log(siguiente(45));

siguienteFlecha = num => ++num
console.log(siguienteFlecha(45));


/*5. Una función que se llame doble, que reciba como parámetro un valor, y
devuelva el doble del número ingresado como parámetro.*/

function doble(numero) {
    return numero*2;
    
}
console.log(doble(18))

var dobleFlecha = num => num*2
console.log(dobleFlecha(18))

dobleFlecha = num => num*2
console.log(dobleFlecha(18))


/*6. Una función que se llame cuadrado, que reciba como parámetro un
valor, y devuelva el valor del numero ingresado como parámetro
elevado al cuadrado.*/

function cuadrado(numero) {
    return numero**2;
    
}
console.log(cuadrado(9))

var cuadradoFlecha = num => num*num
console.log(cuadradoFlecha(9))

cuadradoFlecha = num => num*num
console.log(cuadradoFlecha(9))

/*7. Una función que se denomine imprimirValores que dado un número
por parámetro, imprima cual es el valor siguiente, el doble y el
cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) :
siguiente, el doble y el cuadrado.*/

function imprimirValores(numero) {
    console.log(siguiente(numero));
    console.log(doble(numero));
    console.log(cuadrado(numero));
}
imprimirValores(7)


function imprimirValores(numero) {
    console.log(siguiente(numero));
    console.log(doble(numero));
    console.log(cuadrado(numero));
}
imprimirValores(7)




/*8. Una función que se denomine imprimirElDobleDelSiguiente que dado
un número por parámetro, imprima cual es el valor siguiente al el doble.
Usando las funciones definidas en los puntos 5) , 6) : siguiente, el
doble.*/

function imprimirElDobleDelSiguiente(numero) {
    return doble(siguiente(numero));
 
}
console.log(imprimirElDobleDelSiguiente(9))


/*9. Una función que se denomine
imprimirElDobleDelSiguienteAlCuadrado que dado un número por
parámetro, imprima cual es el valor siguiente al el doble. Usando las
funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el
cuadrado.*/

function imprimirElDobleDelSiguienteAlCuadrado(numero) {
    return doble(cuadrado(siguiente(numero)));
   
}
console.log(imprimirElDobleDelSiguienteAlCuadrado(3))



/*10.Una función que dado la longitud de un lado de un cuadrado devuelva
el perímetro.*/

function perimetroDelCuadradoDe(lado) {
    return console.log(lado*4);
}
perimetroDelCuadradoDe(4)


/*11. Una función que dado la longitud de un lado de un cuadrado devuelva
la superficie.*/

function superficieDelCuadradoDe(lado) {
    return console.log(lado**2);
}
superficieDelCuadradoDe(10)


/*12.Una función que dado el radio de un círculo devuelva la circunferencia
(perímetro del círculo).*/

function circunferenciaDelCirculoDe(radio) {
    return console.log(Math.PI*2*radio);
}
circunferenciaDelCirculoDe(6)


/*13.Una función que dado el radio de un círculo devuelva el área del
círculo.*/

function areaDelCirculoDe(radio) {
    return console.log(Math.PI*radio*radio);
}
areaDelCirculoDe(4)

function areaDelCirculoDe(radio) {
    return console.log(Math.PI*radio**2);
}
areaDelCirculoDe(4)


/*14.Una función que dado un número de mes y me devuelva la cantidad de
días de ese mes (suponiendo que no es un año bisiesto).*/

function diasDelMes(mes) {
   if (mes == 2) {
       return 28;
   } else {
    if (mes == 4 || mes == 6 || mes == 9 || mes == 4) {
        return 30;
    }
   }
   return 31; 
    
   }
console.log(diasDelMes(2)) 
console.log(diasDelMes(4)) 
console.log(diasDelMes(12)) 



/*15.Una función que reciba como parámetro un año y diga si ese año es
bisiesto.*/

function esAñoBisiesto(año) {
    if (año%4 == 0) {
        return true;
    }
    return false;
}
console.log(esAñoBisiesto(2012))
console.log(esAñoBisiesto(2013))

/*16.Una función que reciba el día, mes y año y me devuelva la cantidad de
días de ese mes.*/

function cantDeDias(dia, mes, año) {
   
    if (esAñoBisiesto(año)) {
       
        return dia+diasDelMes(mes)+366;
    }

    return dia+diasDelMes(mes)+365;
}
console.log(cantDeDias(27, 7, 2012))
console.log(cantDeDias(27, 7, 2013))


// 17.Una función que reciba día, mes y año y devuelva el día anterior

function diaAnterior(dia, mes, año) {
    return dia-1;
    
}
console.log(diaAnterior(27, 7, 2020),)


/* 18.Una función que se llame ultimoDiaDelMes que reciba día, mes y año y
devuelva el último día del mes.*/

function ultimoDiaDelMes(dia, mes, año) {
    return diasDelMes(mes);
}
console.log(ultimoDiaDelMes(27, 7, 2020))


// Tabla de multilicar.
/*
function tablaMultiplicar(tabla, hasta) {
    for (var i = 1; i <= hasta; i++)
    console.log(tabla + " x " + i + " = ", tabla * i)
 }
 tablaMultiplicar(5, 10)*/


 /*26.Ejercicio 8: escriba una función de JavaScript que invierta un número.
Por ejemplo, si x = 32443, la salida debería ser 34423.*/

/*
console.log("123456".length)

console.log((123456).toString())

var num = (567890).toString()
var a = num[1]
console.log(a);*/



 function invertir(numero) {
    let num = (numero).toString();
    let longitud = num.length;
    let numInvertido = num[longitud-1];
   for (let i=longitud-2; i>=0; i--) {
        numInvertido+=num[i];
    }
   return parseInt(numInvertido,10);
}

console.log(invertir(123456))
console.log(invertir(1111199999))
console.log(invertir(10101010))
console.log(invertir(9876543210))


/*27.Ejercicio 9: escriba una función de JavaScript que devuelva una cadena
en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería
ser 'abeemrstw'. La puntuación y los números no se pasan en la
cadena.*/

/*
function ordenarAlfa(palabra) {

let palabra2;
let n = palabra.length;

for(let j=1; j<palabra.length; j++) {
   
    
    for(let i=0; i<n; i++) {

        if(palabra[i] >= palabra[i+1]) {
    
            palabra2[i] = palabra[i+1];
            palabra2[i+1] = palabra[i];
        }
        i++;
  
  }
  j++;
  n--;
  

}
return console.log(palabra2);

}

ordenarAlfa("virginia")*/



function ordenarAlfa(palabra) {
    let palabraOrdenada;
    let aux;
    aux = palabra[0];

    for(let i=1; i<palabra.length; i++) {
        
        for(let j=1; j<palabra.length; j++) {

            if(aux > palabra[j]) {
                aux=palabra[j];
                j++;  
            }
            j++;
        }
        palabraOrdenada+=aux;
        i++;
    }
    return console.log(palabraOrdenada); 
}

ordenarAlfa("virginia")

/*28.Ejercicio 10: escriba una función de JavaScript que convierta la primera
letra de cada palabra a mayúsculas. Por ejemplo, si x = "prince of
persia", la salida debería ser "Prince Of Persia".*/

/*
function ejercicio10(parrafo) {
    let aux;
    aux=parrafo[0].toUpperCase();
    let i=1;
    for(i; 1<=parrafo.length; i++){

       if(parrafo[i] == "") {
         aux+=parrafo[i+1].toUpperCase();
       }
       
    }

    return aux;
}

console.log("vamos river");*/


/*29.Ejercicio 11: escriba una función de JavaScript que busque la palabra
más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web",
el resultado debería ser "Desarrollo"*/