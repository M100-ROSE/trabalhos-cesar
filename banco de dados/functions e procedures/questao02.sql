DROP FUNCTION IF EXISTS situacao_aluno;

DELIMITER $$

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

DELIMITER ;

SELECT
    situacao_aluno(6.0) AS Media_6,
    situacao_aluno(5.5) AS Media_5_5,
    situacao_aluno(3.9) AS Media_3_9;
