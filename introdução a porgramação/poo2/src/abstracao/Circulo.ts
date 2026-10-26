import { Forma } from "./Forma.ts";

export class Circulo extends Forma {
  private raio: number;

  constructor(raio: number) {
    super();
    this.raio = raio;
  }

  override calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}
