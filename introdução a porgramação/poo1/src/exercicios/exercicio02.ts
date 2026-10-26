import { Produto } from "../models/Produto.ts";

export function executarExercicio02(): void {
  const produto1 = new Produto("Teclado", 149.9, 12);
  const produto2 = new Produto("Mouse", 79.9, 30);

  console.log(produto1.exibirDados());
  console.log(produto2.exibirDados());
}
