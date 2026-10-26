SELECT
    id,
    produto_id,
    quantidade_antiga,
    quantidade_nova,
    data_alteracao
FROM historico_estoque
ORDER BY id;
