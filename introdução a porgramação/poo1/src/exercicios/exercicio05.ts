import { ContaBancaria } from "../models/ContaBancaria.ts";

export function executarExercicio05(): void {
  const saldoInicial = 500;
  const deposito = 250;
  const conta = new ContaBancaria(saldoInicial);

  conta.depositar(deposito);

  console.log(`Saldo inicial: R$ ${saldoInicial.toFixed(2)}`);
  console.log(`Depósito: R$ ${deposito.toFixed(2)}`);
  console.log(`Saldo atual: R$ ${conta.consultarSaldo().toFixed(2)}`);
}
