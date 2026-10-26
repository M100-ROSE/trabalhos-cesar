import { Pessoa } from "./Pessoa.ts";

export class Aluno extends Pessoa {
  private matricula: string;

  constructor(nome: string, matricula: string) {
    super(nome);
    this.matricula = matricula;
  }

  getMatricula(): string {
    return this.matricula;
  }

  override descrever(): string {
    return `Aluno de matrícula ${this.matricula}`;
  }
}
