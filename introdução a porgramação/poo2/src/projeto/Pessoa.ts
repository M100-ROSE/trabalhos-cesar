import type { Identificavel } from "./Identificavel.ts";

export abstract class Pessoa implements Identificavel {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  getNome(): string {
    return this.nome;
  }

  alterarNome(nome: string): void {
    if (nome.trim().length > 0) {
      this.nome = nome;
    }
  }

  abstract descrever(): string;

  identificar(): string {
    return `${this.getNome()} | ${this.descrever()}`;
  }
}
