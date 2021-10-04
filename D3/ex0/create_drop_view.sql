-- Defina em qual banco a view será criada
USE nome_do_banco_de_dados;

-- Comando para criar a view
CREATE VIEW nome_da_view AS query;

-- Comando para mostar a view
SELECT * FROM nome_da_view;

-- Comando para remover a view
DROP VIEW nome_da_view;


-- Exemplos


-- [ 1 ]
CREATE VIEW top_10_customers AS
    SELECT
        c.customer_id,
        c.first_name,
        SUM(p.amount) AS total_amount_spent
    FROM
        sakila.payment p
    INNER
        JOIN sakila.customer c 
            ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;

-- [ 2 ]
SELECT * FROM top_10_customers;

-- [ 3 ]
DROP VIEW top_10_customers;

