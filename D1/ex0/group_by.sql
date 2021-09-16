-- Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING

SELECT 
    first_name
FROM
    sakila.actor
GROUP BY first_name;

SELECT 
    first_name, COUNT(*)
FROM
    sakila.actor
GROUP BY first_name;


-- Média de duração de filmes agrupados por classificação indicativa
SELECT 
    rating, AVG(length)
FROM
    sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT 
    rating, SUM(replacement_cost)
FROM
    sakila.film
GROUP BY rating;


-- [ Exercícios ]

-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos
-- e a quantidade que estão inativos.
SELECT 
    COUNT(active), active
FROM
    sakila.customer
GROUP BY active;

-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja.
-- Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos)
-- e a quantidade de clientes por status.
SELECT 
    COUNT(customer_id) AS `Clientes`,
    store_id AS `Loja`,
    active AS `Ativos`
FROM
    sakila.customer
GROUP BY store_id , active;

-- Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating )
-- dos filmes cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela
-- classificação indicativa e ordenados da maior média para a menor.
SELECT 
    rating AS Classificação, AVG(length) AS Duração
FROM
    sakila.film
GROUP BY rating
ORDER BY Duração DESC;

-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de
-- endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT 
    district AS `Distrito`,
    COUNT(address) AS `Quantidade de Endereços`
FROM
    sakila.address
GROUP BY district
ORDER BY `Quantidade de Endereços` DESC;
