DROP TRIGGER IF EXISTS registrar_alteracao_estoque;

DELIMITER $$

CREATE TRIGGER registrar_alteracao_estoque
AFTER UPDATE
ON produtos
FOR EACH ROW
BEGIN
    INSERT INTO historico_estoque (
        produto_id,
        quantidade_antiga,
        quantidade_nova,
        data_alteracao
    )
    VALUES (
        NEW.id,
        OLD.quantidade,
        NEW.quantidade,
        NOW()
    );
END $$

DELIMITER ;
