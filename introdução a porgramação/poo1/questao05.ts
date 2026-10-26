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

  consultarSaldo(): number {
    return this.saldo;
  }
}

const saldoInicial = 500;
const deposito = 250;
const conta = new ContaBancaria(saldoInicial);

conta.depositar(deposito);

console.log(`Saldo inicial: R$ ${saldoInicial.toFixed(2)}`);
console.log(`Depósito: R$ ${deposito.toFixed(2)}`);
console.log(`Saldo atual: R$ ${conta.consultarSaldo().toFixed(2)}`);
