DROP PROCEDURE IF EXISTS buscar_alunos_por_idade;
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

CREATE PROCEDURE buscar_alunos_por_idade(IN idade_minima INT)
BEGIN
    SELECT id, nome, idade, nota1, nota2
    FROM alunos
    WHERE idade >= idade_minima
    ORDER BY idade;
END $$

DELIMITER ;

CALL buscar_alunos_por_idade(18);
