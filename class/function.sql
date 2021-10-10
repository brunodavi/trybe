USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;

-- Como usar:

SELECT MoviesWithActor(1);

-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos 
-- até o momento por um determinado customer_id .
DELIMITER $$

CREATE FUNCTION paymentCustumer(id INT)
RETURNS DECIMAL READS SQL DATA
BEGIN
DECLARE total DECIMAL;
SELECT SUM(amount) FROM sakila.payment WHERE customer_id = id INTO total;
RETURN total;
END $$

DELIMITER ;

SELECT paymentCustumer(3);

-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao 
-- registro de inventário com esse id.
DELIMITER $$

CREATE FUNCTION getByInvetoryId(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
RETURN (SELECT
    DISTINCT (SELECT f.title FROM sakila.film f WHERE f.film_id = id)
FROM
    sakila.inventory i);
END $$

DELIMITER ;

SELECT getByInvetoryId(1);

-- Crie uma function que receba uma determinada categoria de filme em formato de
-- texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
DELIMITER $$

CREATE FUNCTION categoryCount(category_name VARCHAR(10))
RETURNS INT READS SQL DATA
BEGIN
return (SELECT 
    COUNT(*)
FROM
    sakila.film_category fc
WHERE
    category_id = (SELECT 
            c.category_id
        FROM
            sakila.category c
        WHERE
            c.name = category_name));
END $$

DELIMITER ;

SELECT categoryCount('Horror');
