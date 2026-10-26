import { Pessoa } from "../models/Pessoa.ts";

export function executarExercicio01(): void {
  const pessoa = new Pessoa("Maria", 20);

  console.log(`Nome: ${pessoa.nome}`);
  console.log(`Idade: ${pessoa.idade}`);
}
