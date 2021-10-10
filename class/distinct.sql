-- Monte uma query para encontrar pares únicos de nomes e idades.
SELECT DISTINCT
    Nome, Idade
FROM
    Escola.Alunos;

-- Quantas linhas você encontraria na query anterior?
SELECT 
    COUNT(DISTINCT Nome, Idade)
FROM
    Escola.Alunos;

-- Monte uma query para encontrar somente os nomes únicos.
SELECT DISTINCT
    Nome
FROM
    Escola.Alunos;

-- Quantas linhas você encontraria na query anterior?
SELECT
    COUNT(DISTINCT Nome)
FROM
    Escola.Alunos;

-- Monte uma query para encontrar somente as idades únicas.
SELECT DISTINCT
    Idade
FROM
    Escola.Alunos;

-- Quantas linhas você encontraria na query anterior?
SELECT 
    COUNT(DISTINCT Idade)
FROM
    Escola.Alunos;
