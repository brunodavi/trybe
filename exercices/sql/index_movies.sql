USE sakila;

-- Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de 
-- dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a 
-- imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

CREATE VIEW film_with_categories AS
    SELECT 
    f.title, c.category_id, c.name
FROM
    film_category fc
        JOIN
    category c ON c.category_id = fc.category_id
        JOIN
    film f ON f.film_id = fc.film_id
ORDER BY 1;

-- Crie uma view chamada film_info utilizando as tabelas actor, film_actor e film do banco de dados sakila. Sua 
-- view deve exibir o actor_id, o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título 
-- dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como
-- referência.

CREATE VIEW film_info AS
    SELECT 
        a.actor_id,
        CONCAT(a.first_name, ' ', a.last_name) AS Actor,
        f.title
    FROM
        film_actor fa
            JOIN
        film f ON f.film_id = fa.film_id
            JOIN
        actor a ON a.actor_id = fa.actor_id
    ORDER BY 2;

-- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila.
-- Sua view deve exibir o address_id, o address, o district, o city_id e a city.
-- Os resultados devem ser ordenados pelo nome das cidades.
-- Use a imagem abaixo como referência.

CREATE VIEW address_info AS
    SELECT 
        a.address_id, a.address, a.district, c.city_id, c.city
    FROM
        address a
            JOIN
        city c ON c.city_id = a.city_id
    ORDER BY 4;

-- Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila.
-- Sua view deve exibir o título do filme, o id do idioma e o idioma do filme, como na imagem a seguir.

CREATE VIEW movies_languages AS
    SELECT 
        f.title AS title,
        l.language_id AS language_id,
        l.name AS language
    FROM
        film f
            JOIN
        language l ON l.language_id = f.language_id;

-- Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ),
-- adicionando-o na coluna name. Após ter adicionado o índice,
-- mensure o custo da query utilizando o execution plan,
-- como já foi feito em lições anteriores.

-- Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

-- Após ter criado o índice, mensure o custo com a seguinte query:
CREATE FULLTEXT INDEX category_name ON category(name);
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- Após ter excluído o índice, mensure o custo com a seguinte query:
DROP INDEX category_name ON category;
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
