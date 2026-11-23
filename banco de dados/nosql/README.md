# Banco de Dados NoSQL — CRUD com Firestore

Atividade prática de **Banco de Dados NoSQL** do professor Cesar.

Aplicação em **Node.js** com menu no terminal que realiza o CRUD (CREATE, READ, UPDATE e DELETE) da coleção `alunos` no **Firebase Cloud Firestore**, além de consultas por turma e por data de nascimento.

O material teórico da aula está em [`contexto.md`](./contexto.md).

## Estrutura

```text
nosql/
├── contexto.md                  material da aula
├── package.json                 projeto Node.js (ES Modules)
├── serviceAccountKey.example.json
├── src/
│   ├── index.js                 ponto de entrada (menu ou --exemplo)
│   ├── menu.js                  menu do terminal
│   ├── alunos.js                operações no Firestore
│   ├── conexao.js               Firebase Admin SDK
│   └── validacao.js             validação dos campos
└── README.md
```

## Projeto Firebase

| Item | Valor |
|---|---|
| Projeto | `cesar-1cb0d` |
| Banco | Cloud Firestore |
| Coleção | `alunos` |

Campos de cada documento da coleção `alunos`:

| Campo | Tipo |
|---|---|
| nome | string |
| turma | string |
| dataNascimento | string (AAAA-MM-DD) |
| ativo | boolean |

```text
alunos (coleção)
│
└── aluno001 (documento)
    ├── nome: "Ana Souza"
    ├── turma: "3DSB"
    ├── dataNascimento: "2009-05-15"
    └── ativo: true
```

## Configuração

### 1. Habilitar o Firestore

No [Console do Firebase](https://console.firebase.google.com/) do projeto `cesar-1cb0d`, crie o banco **Cloud Firestore** (modo de produção ou de teste).

### 2. Baixar a chave da conta de serviço

O **Firebase Admin SDK** não utiliza a configuração web do app (aquela com `apiKey`, `authDomain` etc.). Ele precisa de uma chave da conta de serviço:

1. Console do Firebase → **Configurações do projeto** → aba **Contas de serviço**.
2. Clique em **Gerar nova chave privada** e confirme.
3. Salve o arquivo JSON baixado como `serviceAccountKey.json` nesta pasta.

Também é possível apontar outro caminho pela variável de ambiente `GOOGLE_APPLICATION_CREDENTIALS`.

> O arquivo `serviceAccountKey.json` está no `.gitignore` e **não deve ser publicado no GitHub**. Use o [`serviceAccountKey.example.json`](./serviceAccountKey.example.json) apenas como referência de formato.

### 3. Conceder acesso ao Firestore

A conta de serviço do Admin SDK precisa do papel **Cloud Datastore User** (Usuário do Datastore) no projeto:

1. Abra o [IAM do Google Cloud](https://console.cloud.google.com/iam-admin/iam?project=cesar-1cb0d).
2. Clique em **Conceder acesso**.
3. Informe o e-mail da conta de serviço (ex.: `firebase-adminsdk-fbsvc@cesar-1cb0d.iam.gserviceaccount.com`).
4. Selecione o papel **Cloud Datastore User** e salve.

Sem esse papel, o Admin SDK retorna `PERMISSION_DENIED: Missing or insufficient permissions`. A alteração pode levar alguns minutos para propagar.

### 4. Instalar as dependências

```bash
cd "banco de dados/nosql"
npm install
```

## Execução

```bash
npm start
```

Menu exibido no terminal:

```text
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
========================================
```

Para popular a coleção com dados fictícios de uma vez (útil para as capturas de tela):

```bash
npm run exemplo
```

Os alunos de exemplo usam IDs fixos (`exemplo-ana`, `exemplo-bruno` etc.), então o comando pode ser executado novamente sem duplicar registros.

## Operações implementadas

| Operação | Implementação |
|---|---|
| CREATE | `cadastrarAluno` com `collection().add()` |
| READ | `listarAlunos`, `buscarAluno` e `console.table` |
| UPDATE | `atualizarAluno` com `doc().update()` e valores atuais como padrão |
| DELETE | `excluirAluno` com confirmação antes de excluir |
| Consulta por turma | `where("turma", "==", turma)` |
| Consulta por data | `where("dataNascimento", "==", data)` |
| Consulta por período | `where("dataNascimento", ">=", inicio)` e `"<=", fim` |

As datas são armazenadas no formato `AAAA-MM-DD`, o que permite comparar e filtrar períodos diretamente como texto.

## Observações

- Os dados utilizados são fictícios.
- Os alunos de exemplo usam turmas `3DSA`, `3DSB` e `3DSC`.
- O menu valida nome, data (formato e existência) e o campo `ativo` antes de enviar ao Firestore.
