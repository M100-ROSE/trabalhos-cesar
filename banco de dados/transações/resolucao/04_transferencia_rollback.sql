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
