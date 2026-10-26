class Pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class Aluno extends Pessoa {
  constructor(nome: string) {
    super(nome);
  }
}

class Professor extends Pessoa {
  constructor(nome: string) {
    super(nome);
  }
}

const aluno = new Aluno("Mariana");
const professor = new Professor("Rafael");

console.log(`Aluno: ${aluno.nome}`);
console.log(`Professor: ${professor.nome}`);
