import { Pessoa } from "./Pessoa.ts";

export class Professor extends Pessoa {
  constructor(nome: string) {
    super(nome);
  }
}
