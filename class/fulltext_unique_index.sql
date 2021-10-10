-- Criando ídices
CREATE (FULLTEXT|UNIQUE)? INDEX nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;


-- Exemplo


-- [ INDEX ]

CREATE INDEX index_first_name ON sakila.actor(first_name);

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';


DROP INDEX index_first_name ON sakila.actor;

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';


-- [ FULLTEXT ]

CREATE FULLTEXT INDEX index_address ON sakila.address(address);

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive');


DROP INDEX index_address ON sakila.address;

SELECT *
FROM sakila.address
WHERE address LIKE '%drive%';


-- [ UNIQUE ]

CREATE UNIQUE INDEX nome_do_indice ON nome_tabela(nome_coluna);
DROP INDEX nome_do_indice ON nome_tabela;

SHOW INDEX FROM sakila.actor;CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);

SELECT *
FROM sakila.language
WHERE name = 'Mandarin';


DROP INDEX unique_name_index ON sakila.language;

SELECT *
FROM sakila.language
WHERE name = 'Mandarin';
