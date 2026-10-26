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
