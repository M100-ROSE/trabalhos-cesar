import { conectarFirestore } from "./conexao.js";

const COLECAO = "alunos";

function alunos() {
  return conectarFirestore().collection(COLECAO);
}

function converter(documento) {
  return { id: documento.id, ...documento.data() };
}

function ordenarPorNome(lista) {
  return lista.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
}

export async function cadastrarAluno(aluno) {
  const referencia = await alunos().add(aluno);
  return referencia.id;
}

export async function listarAlunos() {
  const resultado = await alunos().get();
  return ordenarPorNome(resultado.docs.map(converter));
}

export async function buscarAluno(id) {
  const documento = await alunos().doc(id).get();
  return documento.exists ? converter(documento) : null;
}

export async function atualizarAluno(id, dados) {
  await alunos().doc(id).update(dados);
}

export async function excluirAluno(id) {
  await alunos().doc(id).delete();
}

export async function consultarPorTurma(turma) {
  const resultado = await alunos().where("turma", "==", turma).get();
  return ordenarPorNome(resultado.docs.map(converter));
}

export async function consultarPorDataNascimento(dataNascimento) {
  const resultado = await alunos()
    .where("dataNascimento", "==", dataNascimento)
    .get();
  return ordenarPorNome(resultado.docs.map(converter));
}

export async function consultarPorPeriodo(inicio, fim) {
  const resultado = await alunos()
    .where("dataNascimento", ">=", inicio)
    .where("dataNascimento", "<=", fim)
    .get();
  return ordenarPorNome(resultado.docs.map(converter));
}

const ALUNOS_EXEMPLO = [
  {
    id: "exemplo-ana",
    nome: "Ana Souza",
    turma: "3DSB",
    dataNascimento: "2009-05-15",
    ativo: true,
  },
  {
    id: "exemplo-bruno",
    nome: "Bruno Lima",
    turma: "3DSB",
    dataNascimento: "2008-11-02",
    ativo: true,
  },
  {
    id: "exemplo-carla",
    nome: "Carla Mendes",
    turma: "3DSC",
    dataNascimento: "2009-01-27",
    ativo: true,
  },
  {
    id: "exemplo-diego",
    nome: "Diego Rocha",
    turma: "3DSA",
    dataNascimento: "2008-07-09",
    ativo: false,
  },
  {
    id: "exemplo-eduarda",
    nome: "Eduarda Alves",
    turma: "3DSC",
    dataNascimento: "2009-09-21",
    ativo: true,
  },
];

export async function cadastrarAlunosExemplo() {
  const colecao = alunos();
  const lote = conectarFirestore().batch();

  for (const { id, ...aluno } of ALUNOS_EXEMPLO) {
    lote.set(colecao.doc(id), aluno);
  }

  await lote.commit();
  return ALUNOS_EXEMPLO.length;
}
