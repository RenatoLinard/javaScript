var aluno = {
    nome: "renato",
    idade: 33,
    rg: 4599240,
    cel: 67998811748,
};

var atendeClassificacaoEtaria = aluno.idade > 18;

if (atendeClassificacaoEtaria === true) {
    console.log ("acesso permitido ao conteudo");
}

else{
    console.log("O usuario ainda não pode assistir o coteudo");
}
