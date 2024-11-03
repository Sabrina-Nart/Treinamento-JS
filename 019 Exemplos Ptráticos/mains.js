//Deve-se monstrar uma tabela com alunos, apresentando suas médias finais e a situação.
//A situação só pode ser "Aprovada", "Recuperação" ou "Reprovado".

const alunos = [
    {
        nome: "Josh",
        turma: "A",
        notas: [9.2, 8.3, 8.8],
    },
    {
        nome: "Rebeca",
        turma: "A",
        notas: [6.1, 5.9, 7.2],
    },
    {
        nome: "Janet",
        turma: "A",
        notas: [5.1, 4.8, 4.3],
    },
    {
        nome: "James",
        turma: "A",
        notas: [7.0, 7.5, 7.8],
    },
    {
        nome: "Harold",
        turma: "D",
        notas: [6.5, 6.8, 5.7],
    },
    {
        nome: "Christina",
        turma: "D",
        notas: [6.5, 6.8, 5.7],
    },
    {
        nome: "Leonard",
        turma: "D",
        notas: [4.7, 4.1, 4.3],
    },
];

const tableAlunos = document.querySelector("#tableAlunos");

const mediaAluno = (n1, n2, n3) => {
    const calculo = (n1 + n2 + n3) / 3;

    return calculo;
};

const situacaoAluno = (media) => {

    let situacao;

    if (media >= 7){
        situacao = "Aprovado";
    } else if (media < 7 && media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    return situacao;
};

const templateHtml = (nome, turma, media, situacao) => {

    return `
        <tr> 
            <td>${nome}</td>
            <td>${turma}</td>
            <td>${media.toFixed(1)}</td>
            <td>${situacao}</td>
        </tr>   
    `;
};

let tableAlunosHtml = "";

alunos.forEach((aluno) => {

    const { nome, turma, notas } = aluno;

    const media = mediaAluno(notas[0], notas[1], notas[2]),
          situacao = situacaoAluno(media),
          template = templateHtml(nome, turma, media, situacao);   

    tableAlunosHtml += template;
});

tableAlunos.innerHTML = tableAlunosHtml;