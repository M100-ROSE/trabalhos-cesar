import { cadastrarAlunosExemplo } from "./alunos.js";
import { iniciarMenu } from "./menu.js";

if (process.argv.includes("--exemplo")) {
  try {
    const total = await cadastrarAlunosExemplo();
    console.log(
      `${total} alunos de exemplo cadastrados na coleção "alunos".`
    );
  } catch (erro) {
    console.error(`Erro ao cadastrar os alunos de exemplo: ${erro.message}`);
    process.exitCode = 1;
  }
} else {
  await iniciarMenu();
}
