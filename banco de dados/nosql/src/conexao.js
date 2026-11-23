import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function carregarCredenciais() {
  const caminho =
    process.env.GOOGLE_APPLICATION_CREDENTIALS ??
    resolve(raiz, "serviceAccountKey.json");

  try {
    return JSON.parse(readFileSync(caminho, "utf8"));
  } catch {
    throw new Error(
      `Arquivo de credenciais não encontrado ou inválido em "${caminho}". ` +
        "Baixe a chave da conta de serviço no Console do Firebase " +
        "(Configurações do projeto > Contas de serviço > Gerar nova chave privada) " +
        "e salve como serviceAccountKey.json."
    );
  }
}

let banco;

export function conectarFirestore() {
  if (banco) return banco;

  if (getApps().length === 0) {
    initializeApp({
      credential: cert(carregarCredenciais()),
      projectId: "cesar-1cb0d",
    });
  }

  banco = getFirestore();
  return banco;
}
