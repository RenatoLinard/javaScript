let colecao_programadores = [
    {nome: 'Renato', tecnologia: 'javascript'},
    {nome: 'Vitor', tecnologia: 'python'},
];

let nome_programador = colecao_programadores[0].nome;
let tecnologia_programdor = colecao_programadores[0].tecnologia;


console.log('Nome do Programador: ' + nome_programador +
    ' \nTecnologia do programador: ' + tecnologia_programdor)

//Estrutura padrão if/else
if (tecnologia_programdor === 'python'){
    console.log('Apto para vaga de programador');
} else
    console.log('Você precisa estudar Python');

//Estrutura if ternario
console.log(tecnologia_programdor === 'python' ? 'Apto para vaga de programador'
: 'Você precisa estudar python');

//Estrutra curto circuito

