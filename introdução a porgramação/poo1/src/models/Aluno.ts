export class Aluno {
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
