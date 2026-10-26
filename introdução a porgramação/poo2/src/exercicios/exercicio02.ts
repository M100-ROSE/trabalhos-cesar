import { ContaBancaria } from "../encapsulamento/ContaBancaria.ts";

export function executarExercicio02(): void {
  const conta = new ContaBancaria();

  conta.depositar(500);
  const saqueRealizado = conta.sacar(200);
  const saqueExcedente = conta.sacar(1000);

  console.log(`Saque de R$ 200.00 realizado: ${saqueRealizado ? "Sim" : "Não"}`);
  console.log(`Saque de R$ 1000.00 realizado: ${saqueExcedente ? "Sim" : "Não"}`);
  console.log(`Saldo: R$ ${conta.consultarSaldo().toFixed(2)}`);
}
