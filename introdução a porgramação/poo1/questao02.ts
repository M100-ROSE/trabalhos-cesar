class Produto {
  nome: string;
  preco: number;
  estoque: number;

  constructor(nome: string, preco: number, estoque: number) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  exibirDados(): string {
    return `Nome: ${this.nome} | Preço: R$ ${this.preco.toFixed(2)} | Estoque: ${this.estoque}`;
  }
}

const produto1 = new Produto("Teclado", 149.9, 12);
const produto2 = new Produto("Mouse", 79.9, 30);

console.log(produto1.exibirDados());
console.log(produto2.exibirDados());
