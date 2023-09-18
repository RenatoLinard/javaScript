/* Podemos iterar um bloco de repetições diversas vezes enquanto a condição 
for verdadeira
Nessa estrutura o bloco de repetição será executatdo pelo menos uma vez
mesmo que a condição seja false na primeira iteração. */

let contador = 0;

do{
    console.log(contador);

    //necessario o incremento do contador para que o loop possa finalizar
    contador++
} while(contador < 5);

               //Comparação entre do..while e while:
//não será impresso nada pq na primeira iteração ja resulta em false
contador = 0

while(contador < 0) {
    console.log(contador);
    contador++
}
//nessa estrutura mesmo a primeira iteração ser false ela irá imprimir pelo menos
//um resultado, principal diferença entre a duas estruturas.
contador = 0

do{
    //isso acontece pq o bloco de codigo é executado antes da primeira condição
    //ser validada
    console.log(contador);
    contador++
    
}while(contador < 0);


