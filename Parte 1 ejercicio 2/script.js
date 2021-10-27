
/*Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/
Ej. Entrada ---> [‘b’,‘h’,‘w’,‘e’,‘a’]
Salida ----> [‘a’,‘b’,‘e’,‘h’,‘w’]  

VALOR ASCII DECIMAL =[98, 104, 119, 101, 97]
                      b    h    w    e    a  
                     [97,98,101,104,119] */     
                     
//ORDENAMIENTO BURBUJA

/*let numeros = [98, 104, 119, 101, 97];
const ordenamiemientodecimal =(arreglo)=>{
    let length = arreglo.length;
    for (let uno = 0; uno < length; uno++) {
    for (let dos = 0; dos < length -1 -uno; dos++) { 
        if(arreglo[dos] > arreglo[dos + 1]){
            [arreglo[dos], arreglo[dos + 1]] = [arreglo[dos +1], arreglo[dos]];
                }
    }
}
return arreglo
}
let arregloSort= numeros.sort(function(a,b){
    return a-b;
});
console.log(arregloSort);
*/

let numeros = [98, 104, 119, 101, 97];
const ordendecimal =(arreglo)=>{
    let length = arreglo.length;
    for (let uno = 0; uno < length; uno++) {
    for (let dos = 0; dos < length -1 -uno; dos++) { 
        if(arreglo[dos].charCode(0) > arreglo[dos + 1].charCode(0)){
            [arreglo[dos], arreglo[dos + 1]] = [arreglo[dos +1], arreglo[dos]];
                }
    }
}
return arreglo
}
let arregloSort= numeros.sort(function(a,b){
    return a-b;
});
console.log(arregloSort);