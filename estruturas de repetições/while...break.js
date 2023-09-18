/* Quando utilizado a iteração é interrompida e a execução do programa continua
    na proxima linha após o laço. */


let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0;
//inicia com false para indicar que até o momento não sabe se existe alguem 
//habilitado
let encontrouHabilitado = false;

while ( contador < funcionarios.length ) {

    //variavel que irá armazenar cada item da coleção funcionarios a medida
    //que for realizado a iteração, posteriormente será usada na condicional if 
    //para testar individualmente a condição desejada.
    let funcionario = funcionarios[contador];

    //Com o comando break no momento em que pelo menos 1 item for verdadeiro 
    //a iteração é interrompida quebrando o laço e passando para proxima linha
    //fora do bloco
    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}

