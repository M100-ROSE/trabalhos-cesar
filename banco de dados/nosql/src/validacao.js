const FORMATO_DATA = /^\d{4}-\d{2}-\d{2}$/;

export function validarNome(valor) {
  const nome = valor.trim();
  if (nome.length < 3) {
    throw new Error("O nome deve ter pelo menos 3 caracteres.");
  }
  return nome;
}

export function validarTurma(valor) {
  const turma = valor.trim().toUpperCase();
  if (!turma) {
    throw new Error("A turma não pode ficar vazia.");
  }
  return turma;
}

export function validarDataNascimento(valor) {
  const data = valor.trim();

  if (!FORMATO_DATA.test(data)) {
    throw new Error("Informe a data no formato AAAA-MM-DD.");
  }

  const [ano, mes, dia] = data.split("-").map(Number);
  const objeto = new Date(Date.UTC(ano, mes - 1, dia));

  if (
    objeto.getUTCFullYear() !== ano ||
    objeto.getUTCMonth() !== mes - 1 ||
    objeto.getUTCDate() !== dia
  ) {
    throw new Error("Data de nascimento inválida.");
  }

  if (ano < 1900 || objeto > new Date()) {
    throw new Error("Data de nascimento fora do intervalo permitido.");
  }

  return data;
}

export function validarAtivo(valor) {
  const texto = valor.trim().toLowerCase();

  if (["s", "sim", "true", "1", "ativo"].includes(texto)) {
    return true;
  }

  if (["n", "nao", "não", "false", "0", "inativo"].includes(texto)) {
    return false;
  }

  throw new Error("Responda com s (sim) ou n (não).");
}
