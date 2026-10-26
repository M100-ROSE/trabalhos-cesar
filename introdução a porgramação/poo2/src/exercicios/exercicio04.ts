import type { Forma } from "../abstracao/Forma.ts";
import { Retangulo } from "../abstracao/Retangulo.ts";
import { Circulo } from "../abstracao/Circulo.ts";

export function executarExercicio04(): void {
  const formas: Forma[] = [new Retangulo(4, 5), new Circulo(3)];

  for (const forma of formas) {
    console.log(`${forma.constructor.name}: ${forma.calcularArea().toFixed(2)}`);
  }
}
