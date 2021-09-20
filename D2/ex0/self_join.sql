-- O que é SELF JOIN e quando utilizá-lo
SELECT 
    t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM
    sakila.film AS t1,
    sakila.film AS t2
WHERE
    t1.length = t2.length;

-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT 
    t1.film_id, t1.replacement_cost
FROM
    sakila.film t1,
    sakila.film t2
WHERE
    t1.length = t2.length;

-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração.
-- Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT 
    t1.title, t1.rental_duration
FROM
    sakila.film t1,
    sakila.film t2
WHERE
    t1.rental_duration IN (2 , 3, 4)
        AND t2.rental_duration IN (2 , 3, 4);
