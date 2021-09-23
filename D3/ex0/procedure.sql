USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
    SELECT * FROM sakila.actor;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAllActors();

-- Construindo sua primeira stored procedure

-- Vamos criar nossas primeiras stored procedures . Temos os seguintes tipos:

-- Procedure sem parâmetros;
-- Procedure com parâmetros de entrada (IN) ;
-- Procedure com parâmetros de saída (OUT) ;
-- Procedure com parâmetros de entrada e saída (IN-OUT) .


-- Procedure com parâmetros de entrada (IN):
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

-- Como usar:

CALL ShowActorsWithSyllable('lope');


-- Procedure com parâmetros de saida (OUT):

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;


-- Procedure com parâmetros de entrada-saida (IN-OUT):

USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$

DELIMITER ;

-- Como usar:

SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;


-- [ Exercícios ]

-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa 
-- procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou 
-- atriz e a quantidade de filmes em que atuaram.
DELIMITER $$

CREATE PROCEDURE mostPopular()
BEGIN
	SELECT 
		actor_id, COUNT(*)
	FROM
		film_actor
	GROUP BY actor_id
	ORDER BY COUNT(*) DESC;
END $$

DELIMITER ;


-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que 
-- exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas 
-- film , film_category e category para montar essa procedure.
DELIMITER $$

CREATE PROCEDURE filmCategory(IN _category VARCHAR(50))

BEGIN
SELECT 
    f.film_id, f.title, c.category_id, c.name
FROM
    sakila.category c
        JOIN
    sakila.film f
        JOIN
    sakila.film_category fc ON c.category_id = fc.category_id
        AND f.film_id = fc.film_id
        AND c.name = _category;
END $$

DELIMITER ;

CALL filmCategory('Comedy');

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou 
-- não ativo, através de um parâmetro de saída.
