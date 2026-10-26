DROP VIEW IF EXISTS alunos_matriculados;
DROP VIEW IF EXISTS alunos_maiores;
DROP TABLE IF EXISTS matriculas;
DROP TABLE IF EXISTS cursos;
DROP TABLE IF EXISTS alunos;

CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL
);

CREATE TABLE cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE matriculas (
    aluno_id INT NOT NULL,
    curso_id INT NOT NULL,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

INSERT INTO alunos (nome, idade)
VALUES
    ('Ana', 17),
    ('Bruno', 18),
    ('Carla', 20),
    ('Diego', 16);

INSERT INTO cursos (nome)
VALUES
    ('Banco de Dados'),
    ('Programação');

INSERT INTO matriculas (aluno_id, curso_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 1),
    (3, 2);

CREATE VIEW alunos_maiores AS
SELECT
    id,
    nome,
    idade
FROM alunos
WHERE idade >= 18;

SELECT * FROM alunos_maiores;

SELECT * FROM alunos_maiores
WHERE nome LIKE 'C%';

CREATE VIEW alunos_matriculados AS
SELECT
    alunos.nome AS aluno,
    cursos.nome AS curso
FROM alunos
INNER JOIN matriculas
    ON matriculas.aluno_id = alunos.id
INNER JOIN cursos
    ON matriculas.curso_id = cursos.id;

SELECT * FROM alunos_matriculados;

CREATE OR REPLACE VIEW alunos_maiores AS
SELECT
    id,
    nome,
    idade
FROM alunos
WHERE idade >= 16;

SELECT * FROM alunos_maiores;
