let numeros = [
    1,
    5,
    8,
    1,
    5,
    76,
    8,
    56,
    34,
    10
];

let contador=0;
let numeros_par = 0; 
let numeros_impar = 0;


while(contador < numeros.length){
    if (numeros[contador] % 2 == 0){
        numeros_par++;
    }else {
        numeros_impar++;
    }
    contador++
}

console.log('Nessa coleção possui: ' + numeros_par + ' numeros pares.');
console.log('Nessa coleção possui: ' + numeros_impar + ' numeros impares');
