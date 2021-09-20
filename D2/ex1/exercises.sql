-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( 
-- international_sales ) de cada filme.
SELECT 
    domestic_sales, international_sales
FROM
    Pixar.Movies m
        INNER JOIN
    Pixar.BoxOffice b ON m.id = b.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que 
-- possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( 
-- domestic_sales ).
SELECT 
    domestic_sales, international_sales
FROM
    Pixar.Movies m
        INNER JOIN
    Pixar.BoxOffice b ON m.id = b.movie_id
WHERE
    international_sales > domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em 
-- ordem decrescente.
SELECT 
    title, b.rating
FROM
    Pixar.Movies m
        INNER JOIN
    Pixar.BoxOffice b ON m.id = b.movie_id
ORDER BY b.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que 
-- não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. 
-- Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    *
FROM
    Pixar.Movies m
        LEFT JOIN
    Pixar.Theater t ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que 
-- não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os 
-- nomes dos cinemas em ordem alfabética.
SELECT 
    *
FROM
    Pixar.Movies m
        RIGHT JOIN
    Pixar.Theater t ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os 
-- títulos dos filmes que possuem avaliação maior que 7.5.
SELECT 
    title
FROM
    Pixar.Movies
WHERE
    EXISTS( SELECT 
            *
        FROM
            Pixar.BoxOffice b
        WHERE
            b.movie_id = id and b.rating > 7.5);

SELECT 
    title
FROM
    Pixar.Movies
        JOIN
    Pixar.BoxOffice b ON b.movie_id = id AND b.rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as 
-- avaliações dos filmes lançados depois de 2009.
SELECT 
    rating
FROM
    Pixar.BoxOffice
WHERE
    EXISTS( SELECT 
            *
        FROM
            Pixar.Movies m
        WHERE
            movie_id = m.id and year > 2009);

SELECT 
    b.rating
FROM
    Pixar.Movies m
        INNER JOIN
    Pixar.BoxOffice b ON b.movie_id = m.id
where m.year > 2009;

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT 
    name, location
FROM
    Pixar.Theater t
WHERE
    EXISTS( SELECT 
            *
        FROM
            Pixar.Movies m
        WHERE
            t.id = m.theater_id);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em 
-- cartaz.
SELECT 
    name, location
FROM
    Pixar.Theater t
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Pixar.Movies m
        WHERE
            t.id = m.theater_id);
