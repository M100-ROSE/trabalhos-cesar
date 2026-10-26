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
