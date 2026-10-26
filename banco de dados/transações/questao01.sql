DROP TABLE IF EXISTS contas;

CREATE TABLE contas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titular VARCHAR(100) NOT NULL,
    saldo DECIMAL(10,2) NOT NULL
);

INSERT INTO contas (titular, saldo)
VALUES
    ('Ana', 1500.00),
    ('Carlos', 800.00);

START TRANSACTION;

UPDATE contas
SET saldo = saldo - 300.00
WHERE titular = 'Ana';

UPDATE contas
SET saldo = saldo + 300.00
WHERE titular = 'Carlos';

SELECT * FROM contas;

COMMIT;

SELECT * FROM contas;

START TRANSACTION;

UPDATE contas
SET saldo = saldo - 200.00
WHERE titular = 'Carlos';

UPDATE contas
SET saldo = saldo + 200.00
WHERE titular = 'Ana';

SELECT * FROM contas;

ROLLBACK;

SELECT * FROM contas;
