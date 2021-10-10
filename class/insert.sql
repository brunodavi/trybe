-- Insira um novo funcionário na tabela sakila.staff.

-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e
-- selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar.
-- Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente.
-- Boa explorada!
INSERT INTO sakila.staff (address_id, store_id, username, first_name, last_name) VALUES
(1, 2, 'Jorge', 'Jorge', 'Alburquerque');

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO sakila.staff (address_id, store_id, username, first_name, last_name) VALUES
(1, 2, 'Pedro', 'Pedro', 'Mendes'),
(1, 2, 'Ana', 'Ana', 'Maria');

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer
-- e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (name) VALUES
('Fantasy'),
('Romance'),
('Adventure');

-- Cadastre uma nova loja na tabela sakila.store.
-- NotFound?
INSERT IGNORE INTO sakila.store (address_id, manager_staff_id) VALUES (2, 1);
