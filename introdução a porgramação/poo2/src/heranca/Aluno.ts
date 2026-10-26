import { Pessoa } from "./Pessoa.ts";

export class Aluno extends Pessoa {
  constructor(nome: string) {
    super(nome);
  }
}
