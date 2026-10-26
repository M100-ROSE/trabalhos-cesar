import { Retangulo } from "../models/Retangulo.ts";

export function executarExercicio04(): void {
  const retangulo = new Retangulo(8, 5);

  console.log(`Largura: ${retangulo.largura}`);
  console.log(`Altura: ${retangulo.altura}`);
  console.log(`Perímetro: ${retangulo.calcularPerimetro()}`);
}
