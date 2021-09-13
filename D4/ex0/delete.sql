-- Exclua do banco de dados o ator com o nome de "KARL".
DELETE FROM sakila.actor
WHERE
    first_name = 'KARL';

-- Exclua do banco de dados os atores com o nome de "MATTHEW".
DELETE FROM sakila.actor 
WHERE
    first_name = 'MATTHEW';

-- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
DELETE FROM sakila.film_text 
WHERE
    description LIKE '%saga%';

-- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

