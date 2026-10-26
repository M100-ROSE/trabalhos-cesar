DROP FUNCTION IF EXISTS dobro;
DROP FUNCTION IF EXISTS situacao_aluno;
DROP FUNCTION IF EXISTS calcular_media;

DELIMITER $$

CREATE FUNCTION dobro(numero INT)
RETURNS INT
DETERMINISTIC
BEGIN
    RETURN numero * 2;
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

CREATE FUNCTION calcular_media(nota1 DECIMAL(5,2), nota2 DECIMAL(5,2))
RETURNS DECIMAL(5,2)
DETERMINISTIC
BEGIN
    RETURN (nota1 + nota2) / 2;
END $$

DELIMITER ;
