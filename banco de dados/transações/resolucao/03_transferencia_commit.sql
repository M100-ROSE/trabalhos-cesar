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
