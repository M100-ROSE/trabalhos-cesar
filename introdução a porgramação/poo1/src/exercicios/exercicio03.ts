import { Aluno } from "../models/Aluno.ts";

export function executarExercicio03(): void {
  const aluno = new Aluno("Carlos", 7.5);

  console.log(`Aluno: ${aluno.nome}`);
  console.log(`Nota: ${aluno.nota.toFixed(1)}`);
  console.log(`Aprovado: ${aluno.aprovado() ? "Sim" : "Não"}`);
}
