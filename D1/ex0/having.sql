-- Filtrando Resultados do GROUP BY com HAVING

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;


-- [ Exercícios ]

-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50.
-- Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível.
-- Finalize ordenando os resultados de forma decrescente.

SELECT 
    rating, AVG(length) AS Classificação
FROM
    sakila.film
GROUP BY rating
HAVING Classificação BETWEEN 115.0 AND 121.50
ORDER BY Classificação DESC;

-- Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50.
-- Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível.
-- Finalize ordenando os resultados de forma crescente.

SELECT 
    rating, SUM(replacement_cost) AS custo
FROM
    sakila.film
GROUP BY rating
HAVING custo > 3950.50
ORDER BY custo;
