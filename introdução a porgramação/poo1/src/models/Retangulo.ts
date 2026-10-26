export class Retangulo {
  largura: number;
  altura: number;

  constructor(largura: number, altura: number) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularPerimetro(): number {
    return 2 * (this.largura + this.altura);
  }
}
