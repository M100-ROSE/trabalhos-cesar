import { Pessoa } from "./Pessoa.ts";

export class Professor extends Pessoa {
  private disciplina: string;

  constructor(nome: string, disciplina: string) {
    super(nome);
    this.disciplina = disciplina;
  }

  getDisciplina(): string {
    return this.disciplina;
  }

  override descrever(): string {
    return `Professor de ${this.disciplina}`;
  }
}
