DROP PROCEDURE IF EXISTS buscar_alunos_por_idade;
DROP PROCEDURE IF EXISTS aumentar_nota;
DROP PROCEDURE IF EXISTS mostrar_situacao;

DELIMITER $$

CREATE PROCEDURE buscar_alunos_por_idade(IN idade_minima INT)
BEGIN
    SELECT id, nome, idade, nota1, nota2
    FROM alunos
    WHERE idade >= idade_minima
    ORDER BY idade;
END $$

CREATE PROCEDURE aumentar_nota(IN id_aluno INT, IN aumento DECIMAL(5,2))
BEGIN
    UPDATE alunos
    SET
        nota1 = nota1 + aumento,
        nota2 = nota2 + aumento
    WHERE id = id_aluno;
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
