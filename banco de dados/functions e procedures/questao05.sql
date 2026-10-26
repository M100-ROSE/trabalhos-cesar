DROP PROCEDURE IF EXISTS mostrar_situacao;
DROP FUNCTION IF EXISTS calcular_media;
DROP FUNCTION IF EXISTS situacao_aluno;
DROP TABLE IF EXISTS alunos;

CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    nota1 DECIMAL(5,2) NOT NULL,
    nota2 DECIMAL(5,2) NOT NULL
);

INSERT INTO alunos (nome, idade, nota1, nota2)
VALUES
    ('Ana', 17, 8.00, 7.00),
    ('Bruno', 18, 5.00, 4.00),
    ('Carla', 20, 9.50, 8.50),
    ('Diego', 16, 3.00, 5.00),
    ('Elisa', 19, 6.00, 6.00);

DELIMITER $$

CREATE FUNCTION calcular_media(nota1 DECIMAL(5,2), nota2 DECIMAL(5,2))
RETURNS DECIMAL(5,2)
DETERMINISTIC
BEGIN
    RETURN (nota1 + nota2) / 2;
END $$

CREATE FUNCTION situacao_aluno(media DECIMAL(5,2))
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
    IF media >= 6 THEN
        RETURN 'Aprovado';
    ELSEIF media >= 4 THEN
        RETURN 'Recuperação';
    ELSE
        RETURN 'Reprovado';
    END IF;
END $$

CREATE PROCEDURE mostrar_situacao(IN id_aluno INT)
BEGIN
    SELECT
        nome AS Nome,
        nota1 AS 'Nota 1',
        nota2 AS 'Nota 2',
        calcular_media(nota1, nota2) AS 'Média',
        situacao_aluno(calcular_media(nota1, nota2)) AS 'Situação'
    FROM alunos
    WHERE id = id_aluno;
END $$

DELIMITER ;

CALL mostrar_situacao(5);
