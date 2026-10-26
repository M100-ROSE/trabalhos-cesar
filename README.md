# Trabalhos - Desenvolvimento de Sistemas

Repositório com as atividades e resoluções das matérias do professor **Cesar**, do curso de **Desenvolvimento de Sistemas** do **Colégio Estadual Presidente Kennedy**.

## Conteúdo

| Matéria | Tema | Pasta |
|---|---|---|
| Introdução à Programação | Programação Orientada a Objetos - parte 1 | `introdução a porgramação/poo1` |
| Introdução à Programação | Programação Orientada a Objetos - parte 2 | `introdução a porgramação/poo2` |
| Banco de Dados | Functions e Procedures | `banco de dados/functions e procedures` |
| Banco de Dados | Transações | `banco de dados/transações` |
| Banco de Dados | Triggers | `banco de dados/triggers` |
| Banco de Dados | Views | `banco de dados/views` |

Cada pasta contém o material de estudo (`contexto.md`) e um script de resolução para cada questão.

## Organização

```text
trabalhos-cesar/
├── introdução a porgramação/
│   ├── poo1/
│   │   ├── contexto.md
│   │   ├── questao01.ts
│   │   ├── questao02.ts
│   │   ├── questao03.ts
│   │   ├── questao04.ts
│   │   └── questao05.ts
│   └── poo2/
│       ├── contexto.md
│       ├── questao01.ts
│       ├── questao02.ts
│       ├── questao03.ts
│       ├── questao04.ts
│       └── questao05.ts
└── banco de dados/
    ├── functions e procedures/
    │   ├── contexto.md
    │   ├── questao01.sql
    │   ├── questao02.sql
    │   ├── questao03.sql
    │   ├── questao04.sql
    │   └── questao05.sql
    ├── transações/
    │   ├── contexto.md
    │   └── questao01.sql
    ├── triggers/
    │   ├── contexto.md
    │   └── questao01.sql
    └── views/
        ├── contexto.md
        └── ex.sql
```

## Como executar

### TypeScript

Os arquivos de POO não possuem dependências externas. Com o **Node.js 24 ou superior**, execute cada questão diretamente:

```bash
node "introdução a porgramação/poo1/questao01.ts"
```

Também é possível executar os demais arquivos:

```bash
node "introdução a porgramação/poo2/questao05.ts"
```

Em versões anteriores do Node.js, use:

```bash
node --experimental-strip-types "introdução a porgramação/poo1/questao01.ts"
```

### SQL

Os scripts foram feitos para **MySQL**. Cada arquivo é independente e pode ser executado em um banco de dados já selecionado:

```bash
mysql -u root -p nome_do_banco < "banco de dados/triggers/questao01.sql"
```

> Atenção: os scripts recriam as tabelas utilizadas e removem versões anteriores dessas tabelas.

## Observações

- Os arquivos `contexto.md` contêm o material teórico fornecido pelo professor.
- Cada questão possui um único script de solução, sem comentários no código.
- As resoluções de banco de dados criam as tabelas, inserem dados de teste e executam a solução.
