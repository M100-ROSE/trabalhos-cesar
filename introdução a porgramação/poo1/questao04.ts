class Retangulo {
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

const retangulo = new Retangulo(8, 5);

console.log(`Largura: ${retangulo.largura}`);
console.log(`Altura: ${retangulo.altura}`);
console.log(`Perímetro: ${retangulo.calcularPerimetro()}`);
