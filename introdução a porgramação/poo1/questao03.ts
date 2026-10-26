class Aluno {
  nome: string;
  nota: number;

  constructor(nome: string, nota: number) {
    this.nome = nome;
    this.nota = nota;
  }

  aprovado(): boolean {
    return this.nota >= 6;
  }
}

const aluno = new Aluno("Carlos", 7.5);

console.log(`Aluno: ${aluno.nome}`);
console.log(`Nota: ${aluno.nota.toFixed(1)}`);
console.log(`Aprovado: ${aluno.aprovado() ? "Sim" : "Não"}`);
