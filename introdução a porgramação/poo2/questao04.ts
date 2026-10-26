abstract class Forma {
  abstract calcularArea(): number;
}

class Retangulo extends Forma {
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

class Circulo extends Forma {
  private raio: number;

  constructor(raio: number) {
    super();
    this.raio = raio;
  }

  override calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

const formas: Forma[] = [new Retangulo(4, 5), new Circulo(3)];

for (const forma of formas) {
  console.log(`${forma.constructor.name}: ${forma.calcularArea().toFixed(2)}`);
}
