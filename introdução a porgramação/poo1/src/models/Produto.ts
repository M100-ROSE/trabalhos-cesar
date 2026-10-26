export class Produto {
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
