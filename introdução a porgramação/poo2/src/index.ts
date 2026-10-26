import { executarExercicio01 } from "./exercicios/exercicio01.ts";
import { executarExercicio02 } from "./exercicios/exercicio02.ts";
import { executarExercicio03 } from "./exercicios/exercicio03.ts";
import { executarExercicio04 } from "./exercicios/exercicio04.ts";
import { executarExercicio05 } from "./exercicios/exercicio05.ts";

const exercicios = [
  { titulo: "Exercício 1 - Herança", executar: executarExercicio01 },
  { titulo: "Exercício 2 - Encapsulamento", executar: executarExercicio02 },
  { titulo: "Exercício 3 - Polimorfismo", executar: executarExercicio03 },
  { titulo: "Exercício 4 - Abstração", executar: executarExercicio04 },
  { titulo: "Exercício 5 - Projeto integrando os quatro pilares", executar: executarExercicio05 },
];

for (const exercicio of exercicios) {
  console.log(`\n=== ${exercicio.titulo} ===`);
  exercicio.executar();
}
