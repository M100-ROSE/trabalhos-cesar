import { createInterface } from "node:readline/promises";
import { stdin as entrada, stdout as saida } from "node:process";
import {
  atualizarAluno,
  buscarAluno,
  cadastrarAluno,
  cadastrarAlunosExemplo,
  consultarPorDataNascimento,
  consultarPorPeriodo,
  consultarPorTurma,
  excluirAluno,
  listarAlunos,
} from "./alunos.js";
import {
  validarAtivo,
  validarDataNascimento,
  validarNome,
  validarTurma,
} from "./validacao.js";

const rl = createInterface({ input: entrada, output: saida });

class EntradaEncerrada extends Error {}

let encerrado = false;

rl.on("close", () => {
  encerrado = true;
});

rl.on("SIGINT", () => {
  encerrado = true;
  rl.close();
});

async function perguntar(texto) {
  if (encerrado) {
    throw new EntradaEncerrada();
  }

  try {
    return (await rl.question(texto)).trim();
  } catch {
    encerrado = true;
    throw new EntradaEncerrada();
  }
}

async function confirmar(texto) {
  const resposta = await perguntar(`${texto} (s/N): `);
  return resposta.toLowerCase() === "s";
}

function exibirAlunos(alunos) {
  if (alunos.length === 0) {
    console.log("\nNenhum aluno encontrado.\n");
    return;
  }

  console.table(
    alunos.map((aluno) => ({
      ID: aluno.id,
      Nome: aluno.nome,
      Turma: aluno.turma,
      "Data de nascimento": aluno.dataNascimento,
      Ativo: aluno.ativo ? "Sim" : "Não",
    }))
  );

  console.log(`${alunos.length} aluno(s) encontrado(s).\n`);
}

async function cadastrar() {
  console.log("\n--- Cadastrar aluno ---");

  const nome = validarNome(await perguntar("Nome: "));
  const turma = validarTurma(await perguntar("Turma: "));
  const dataNascimento = validarDataNascimento(
    await perguntar("Data de nascimento (AAAA-MM-DD): ")
  );
  const ativo = validarAtivo(await perguntar("Aluno ativo? (s/n): "));

  const id = await cadastrarAluno({ nome, turma, dataNascimento, ativo });
  console.log(`\nAluno cadastrado com o ID ${id}.\n`);
}

async function listar() {
  console.log("\n--- Lista de alunos ---");
  exibirAlunos(await listarAlunos());
}

async function atualizar() {
  console.log("\n--- Atualizar aluno ---");

  const id = await perguntar("ID do aluno: ");
  if (!id) {
    throw new Error("Informe o ID do aluno.");
  }

  const aluno = await buscarAluno(id);
  if (!aluno) {
    throw new Error(`Nenhum aluno encontrado com o ID "${id}".`);
  }

  exibirAlunos([aluno]);
  console.log("Pressione ENTER para manter o valor atual.\n");

  const nome = await perguntar(`Nome [${aluno.nome}]: `);
  const turma = await perguntar(`Turma [${aluno.turma}]: `);
  const dataNascimento = await perguntar(
    `Data de nascimento [${aluno.dataNascimento}]: `
  );
  const ativo = await perguntar(`Ativo (s/n) [${aluno.ativo ? "s" : "n"}]: `);

  const dados = {};
  if (nome) dados.nome = validarNome(nome);
  if (turma) dados.turma = validarTurma(turma);
  if (dataNascimento) {
    dados.dataNascimento = validarDataNascimento(dataNascimento);
  }
  if (ativo) dados.ativo = validarAtivo(ativo);

  if (Object.keys(dados).length === 0) {
    console.log("\nNenhuma alteração realizada.\n");
    return;
  }

  await atualizarAluno(id, dados);
  console.log("\nAluno atualizado com sucesso.\n");
}

async function excluir() {
  console.log("\n--- Excluir aluno ---");

  const id = await perguntar("ID do aluno: ");
  if (!id) {
    throw new Error("Informe o ID do aluno.");
  }

  const aluno = await buscarAluno(id);
  if (!aluno) {
    throw new Error(`Nenhum aluno encontrado com o ID "${id}".`);
  }

  exibirAlunos([aluno]);

  if (!(await confirmar("Confirma a exclusão deste aluno?"))) {
    console.log("\nExclusão cancelada.\n");
    return;
  }

  await excluirAluno(id);
  console.log("\nAluno excluído com sucesso.\n");
}

async function consultarTurma() {
  console.log("\n--- Consultar alunos por turma ---");
  const turma = validarTurma(await perguntar("Turma: "));
  exibirAlunos(await consultarPorTurma(turma));
}

async function consultarData() {
  console.log("\n--- Consultar alunos por data de nascimento ---");
  const dataNascimento = validarDataNascimento(
    await perguntar("Data de nascimento (AAAA-MM-DD): ")
  );
  exibirAlunos(await consultarPorDataNascimento(dataNascimento));
}

async function consultarPeriodo() {
  console.log("\n--- Consultar alunos por período de nascimento ---");

  const inicio = validarDataNascimento(
    await perguntar("Data inicial (AAAA-MM-DD): ")
  );
  const fim = validarDataNascimento(
    await perguntar("Data final (AAAA-MM-DD): ")
  );

  if (inicio > fim) {
    throw new Error("A data inicial deve ser anterior ou igual à data final.");
  }

  exibirAlunos(await consultarPorPeriodo(inicio, fim));
}

async function cadastrarExemplos() {
  console.log("\n--- Cadastrar alunos de exemplo ---");
  const total = await cadastrarAlunosExemplo();
  console.log(`\n${total} alunos de exemplo cadastrados na coleção "alunos".\n`);
}

const ACOES = {
  1: cadastrar,
  2: listar,
  3: atualizar,
  4: excluir,
  5: consultarTurma,
  6: consultarData,
  7: consultarPeriodo,
  8: cadastrarExemplos,
};

export async function iniciarMenu() {
  try {
    await listarAlunos();
    console.log('Conectado ao Firestore na coleção "alunos".');
  } catch (erro) {
    console.error(`Não foi possível conectar ao Firestore: ${erro.message}`);
    rl.close();
    process.exitCode = 1;
    return;
  }

  while (true) {
    console.log(`
========================================
  Firestore - CRUD de alunos
========================================
  1 - Cadastrar aluno
  2 - Listar alunos
  3 - Atualizar aluno
  4 - Excluir aluno
  5 - Consultar por turma
  6 - Consultar por data de nascimento
  7 - Consultar por período de nascimento
  8 - Cadastrar alunos de exemplo
  0 - Sair
========================================`);

    try {
      const opcao = await perguntar("Escolha uma opção: ");

      if (opcao === "0") {
        console.log("\nEncerrando...\n");
        break;
      }

      const acao = ACOES[opcao];
      if (!acao) {
        console.log("\nOpção inválida. Escolha uma das opções do menu.\n");
        continue;
      }

      await acao();
    } catch (erro) {
      if (erro instanceof EntradaEncerrada) {
        break;
      }
      console.error(`\nErro: ${erro.message}\n`);
    }
  }

  rl.close();
}
