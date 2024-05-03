class Aluno {
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }
}

const gabriel = new Aluno ("Gabriel Lisboa", 8);
const iasmim = new Aluno("Iasmim Bessa", 7);
const pedro = new Aluno("Pedro Pereira", 5);
const victor = new Aluno("Victor Albert", 4);

const alunos = [gabriel,iasmim,pedro,victor];

const alunosAprovados = alunos.filter((aluno) => {
    return aluno.nota >= 6;
});

console.log(alunosAprovados);
