import { Pessoa } from "./Pessoa.ts";

export class SistemaAcademico {
  private membros: Pessoa[] = [];

  adicionar(membro: Pessoa): void {
    this.membros.push(membro);
  }

  listar(): string[] {
    return this.membros.map((membro) => membro.identificar());
  }
}
