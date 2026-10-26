import { Aluno } from "../heranca/Aluno.ts";
import { Professor } from "../heranca/Professor.ts";

export function executarExercicio01(): void {
  const aluno = new Aluno("Mariana");
  const professor = new Professor("Rafael");

  console.log(`Aluno: ${aluno.nome}`);
  console.log(`Professor: ${professor.nome}`);
}
