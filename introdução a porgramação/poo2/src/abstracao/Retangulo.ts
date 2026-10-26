import { Forma } from "./Forma.ts";

export class Retangulo extends Forma {
  private largura: number;
  private altura: number;

  constructor(largura: number, altura: number) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  override calcularArea(): number {
    return this.largura * this.altura;
  }
}
