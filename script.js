
/*
let numeros = [1,4,19,12,31,32,40,43,65,67];

const ordenamientoBurbuja = (arreglo) =>{
    let length = arreglo.length;
    for (let uno = 0; uno < length; uno++) {
      //  console.log("ciclo 1:" + uno);
    for (let dos = 0; dos < length -1 -uno; dos++) { 
        //let posicionActual=length -1 -uno;
        //console.log("ciclo 2: " + posicionActual);
        if(arreglo[dos] > arreglo[dos + 1]){
            [arreglo[dos], arreglo[dos + 1]] = [arreglo[dos +1], arreglo[dos]];
                }
    }
}
return arreglo
}


//let arregloOrdenado = ordenamientoBurbuja(numeros);


let arregloSort= numeros.sort(function(a,b){
    return a-b;
});

console.log(arregloSort);

/*

//RETO 26 DE OCTUBRE

Parte 1 - Algoritmo de Ordenamiento 

Crea una función que ordene de forma descendente  un arreglo de números
Ej. Entrada --> [9,3,1,6,5,88,-1,2,7] 
Salida → [88,9,7,6,5,3,1,-1]
*/

/*
let numeros = [9,3,1,6,5,88,-1,2,7];
const ordenamientodescendente =(arreglo)=>{
    let length = arreglo.length;
    for (let uno = 0; uno < length; uno++) {
      //  console.log("ciclo 1:" + uno);
    for (let dos = 0; dos < length -1 -uno; dos++) { 
        //let posicionActual=length -1 -uno;
        //console.log("ciclo 2: " + posicionActual);
        if(arreglo[dos] > arreglo[dos + 1]){
            [arreglo[dos], arreglo[dos + 1]] = [arreglo[dos +1], arreglo[dos]];
                }
    }
}
return arreglo
}


//let arregloOrdenado = ordenamientoBurbuja(numeros);

let arregloSort= numeros.sort(function(a,b){
    return b-a;
});
console.log(arregloSort);

*/



/*Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/
Ej. Entrada ---> [‘b’,‘h’,‘w’,‘e’,‘a’]
Salida ----> [‘a’,‘b’,‘e’,‘h’,‘w’]  VALOR ASCII =[98, 104, 119, 101, 97]
                                                  b    h    w    e    a  
                                                  [97,98,101,104,119] */                                          

let numeros = [98, 104, 119, 101, 97];
const ordenamiemientodecimal =(arreglo)=>{
    let length = arreglo.length;
    for (let uno = 0; uno < length; uno++) {
      //  console.log("ciclo 1:" + uno);
    for (let dos = 0; dos < length -1 -uno; dos++) { 
        //let posicionActual=length -1 -uno;
        //console.log("ciclo 2: " + posicionActual);
        if(arreglo[dos] > arreglo[dos + 1]){
            [arreglo[dos], arreglo[dos + 1]] = [arreglo[dos +1], arreglo[dos]];
                }
    }
}
return arreglo
}


//let arregloOrdenado = ordenamientoBurbuja(numeros);

let arregloSort= numeros.sort(function(a,b){
    return a-b;
});
console.log(arregloSort);