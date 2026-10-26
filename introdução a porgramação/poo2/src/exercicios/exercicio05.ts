import { Aluno } from "../projeto/Aluno.ts";
import { Professor } from "../projeto/Professor.ts";
import { SistemaAcademico } from "../projeto/SistemaAcademico.ts";

export function executarExercicio05(): void {
  const sistema = new SistemaAcademico();

  sistema.adicionar(new Aluno("Ana", "2026001"));
  sistema.adicionar(new Professor("Rafael", "Banco de Dados"));

  for (const membro of sistema.listar()) {
    console.log(membro);
  }
}
