SELECT dobro(10) AS Resultado;

SELECT
    situacao_aluno(6.0) AS Com_Media_6,
    situacao_aluno(5.5) AS Com_Media_5_5,
    situacao_aluno(3.9) AS Com_Media_3_9;

CALL buscar_alunos_por_idade(18);

CALL aumentar_nota(5, 1);

CALL mostrar_situacao(5);
