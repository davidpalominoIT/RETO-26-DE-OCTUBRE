

/*Parte 1 - Algoritmo de Ordenamiento 

Crea una función que ordene de forma descendente  un arreglo de números
Ej. Entrada --> [9,3,1,6,5,88,-1,2,7] 
Salida → [88,9,7,6,5,3,1,-1]
*/
let numeros = [9,3,1,6,5,88,-1,2,7];
const ordenamientodescendente =(arreglo)=>{
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
    return b-a;
});
console.log(arregloSort);

