class Alunos {
    constructor(nome, sobrenome, nota) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nota = nota;
    }
}

const aluno1 = new Alunos ('Carlos', 'Silva', 7);
const aluno2 = new Alunos ('Paula', 'Rosa', 4);
const aluno3 = new Alunos ('Roberto', 'Costa', 6);
const aluno4 = new Alunos ('Maria', 'Clara', 1);

const arrayAlunos = [aluno1, aluno2, aluno3, aluno4];

console.log(arrayAlunos);
console.log(resultado());

function resultado() {
    var arrayAprovados = [];

    for (var i = 0; i < 4; i++) {
        if (arrayAlunos[i].nota >= 6) {
            arrayAprovados.push(arrayAlunos[i]);
        }
    }

    return arrayAprovados;
}