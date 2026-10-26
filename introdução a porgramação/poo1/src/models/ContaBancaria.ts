export class ContaBancaria {
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
