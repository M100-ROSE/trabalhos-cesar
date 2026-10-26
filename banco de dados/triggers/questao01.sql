DROP TRIGGER IF EXISTS registrar_alteracao_estoque;
DROP TABLE IF EXISTS historico_estoque;
DROP TABLE IF EXISTS produtos;

CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL
);

CREATE TABLE historico_estoque (
    id INT PRIMARY KEY AUTO_INCREMENT,
    produto_id INT NOT NULL,
    quantidade_antiga INT NOT NULL,
    quantidade_nova INT NOT NULL,
    data_alteracao DATETIME NOT NULL
);

INSERT INTO produtos (nome, quantidade)
VALUES
    ('Teclado', 10),
    ('Mouse', 25);

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

UPDATE produtos
SET quantidade = 8
WHERE id = 1;

UPDATE produtos
SET quantidade = 15
WHERE id = 1;

SELECT * FROM historico_estoque ORDER BY id;
