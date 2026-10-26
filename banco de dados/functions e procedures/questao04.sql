DROP PROCEDURE IF EXISTS aumentar_nota;
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

CREATE PROCEDURE aumentar_nota(IN id_aluno INT, IN aumento DECIMAL(5,2))
BEGIN
    UPDATE alunos
    SET
        nota1 = nota1 + aumento,
        nota2 = nota2 + aumento
    WHERE id = id_aluno;
END $$

DELIMITER ;

CALL aumentar_nota(5, 1);

SELECT id, nome, nota1, nota2 FROM alunos WHERE id = 5;
