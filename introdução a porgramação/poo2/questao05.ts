interface Identificavel {
  identificar(): string;
}

abstract class Pessoa implements Identificavel {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  getNome(): string {
    return this.nome;
  }

  alterarNome(nome: string): void {
    if (nome.trim().length > 0) {
      this.nome = nome;
    }
  }

  abstract descrever(): string;

  identificar(): string {
    return `${this.getNome()} | ${this.descrever()}`;
  }
}

class Aluno extends Pessoa {
  private matricula: string;

  constructor(nome: string, matricula: string) {
    super(nome);
    this.matricula = matricula;
  }

  getMatricula(): string {
    return this.matricula;
  }

  override descrever(): string {
    return `Aluno de matrícula ${this.matricula}`;
  }
}

class Professor extends Pessoa {
  private disciplina: string;

  constructor(nome: string, disciplina: string) {
    super(nome);
    this.disciplina = disciplina;
  }

  getDisciplina(): string {
    return this.disciplina;
  }

  override descrever(): string {
    return `Professor de ${this.disciplina}`;
  }
}

class SistemaAcademico {
  private membros: Pessoa[] = [];

  adicionar(membro: Pessoa): void {
    this.membros.push(membro);
  }

  listar(): string[] {
    return this.membros.map((membro) => membro.identificar());
  }
}

const sistema = new SistemaAcademico();

sistema.adicionar(new Aluno("Ana", "2026001"));
sistema.adicionar(new Professor("Rafael", "Banco de Dados"));

for (const membro of sistema.listar()) {
  console.log(membro);
}
