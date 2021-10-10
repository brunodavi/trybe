USE sakila;

-- [ VIEW ]

CREATE VIEW film_with_categories AS
    SELECT 
        f.title AS title,
        c.category_id AS category_id,
        c.name AS category
    FROM
        film_category fc
            JOIN
        film f ON f.film_id = fc.film_id
            JOIN
        category c ON c.category_id = fc.category_id
    ORDER BY 1;

CREATE VIEW film_info AS
    SELECT 
        a.actor_id AS actor_id,
        CONCAT(a.first_name, ' ', a.last_name) AS actor,
        f.title AS title
    FROM
        film_actor fa
            JOIN
        film f ON f.film_id = fa.film_id
            JOIN
        actor a ON a.actor_id = fa.actor_id
    ORDER BY 2;

CREATE VIEW address_info AS
    SELECT 
        a.address_id AS address_id,
        a.address AS address,
        a.district AS district,
        c.city_id AS city_id,
        c.city AS city
    FROM
        address a
            JOIN
        city c ON c.city_id = a.city_id
    ORDER BY 5;

CREATE VIEW movies_languages AS
    SELECT 
        f.title AS title,
        l.language_id AS language_id,
        l.name AS name
    FROM
        film f
            JOIN
        language l ON l.language_id = f.language_id;


-- [ INDEX ]

-- Após ter criado o índice, mensure o custo com a seguinte query:
CREATE FULLTEXT INDEX category_name on category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');


-- Após ter excluído o índice, mensure o custo com a seguinte query:
DROP INDEX category_name ON category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';


-- Mensure o custo com a seguinte query:
CREATE INDEX address_postal_code ON address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';


-- [ ALTER ]

USE hr;

ALTER TABLE locations CHANGE STREET_ADDRESS ADDRESS VARCHAR(40);
ALTER TABLE regions CHANGE REGION_NAME REGION VARCHAR(25);
ALTER TABLE countries CHANGE COUNTRY_NAME COUNTRY VARCHAR(40);