SELECT 
    *
FROM
    sakila.film;

-- Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '%ace%';

-- Mostre todos os detalhes dos filmes cujas descrições finalizam com china.
SELECT 
    *
FROM
    sakila.film
WHERE
    description LIKE '%china';

-- Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra
-- girl e o título finaliza com a palavra lord.
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '%lord'
        AND description LIKE '%girl%';

-- Mostre os dois casos em que, a partir do 4° caractere no título do filme,
-- tem-se a palavra gon.

-- [ 1° ]
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '___gon%';

-- [ 2° ]
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '%___gon';

-- Mostre o único caso em que, a partir do 4° caractere no título do filme,
-- tem-se a palavra gon e a descrição contém a palavra Documentary.
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '___gon%'
        AND description LIKE '%Documentary%';

-- Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '%academy'
        OR title LIKE 'mosquito%';

-- Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
SELECT 
    *
FROM
    sakila.film
WHERE
    description LIKE '%monkey%' OR '%sumo%'
LIMIT 6;
