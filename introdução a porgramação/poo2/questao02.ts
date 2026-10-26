class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number = 0) {
    this.saldo = saldoInicial > 0 ? saldoInicial : 0;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  sacar(valor: number): boolean {
    if (valor <= 0 || valor > this.saldo) {
      return false;
    }

    this.saldo -= valor;
    return true;
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

const conta = new ContaBancaria();

conta.depositar(500);
const saqueRealizado = conta.sacar(200);
const saqueExcedente = conta.sacar(1000);

console.log(`Saque de R$ 200.00 realizado: ${saqueRealizado ? "Sim" : "Não"}`);
console.log(`Saque de R$ 1000.00 realizado: ${saqueExcedente ? "Sim" : "Não"}`);
console.log(`Saldo: R$ ${conta.consultarSaldo().toFixed(2)}`);
