SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';

-- Escreva uma query que selecione todas as colunas da tabela city
SELECT 
    *
FROM
    sakila.city;

-- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer
SELECT 
    first_name, last_name
FROM
    sakila.customer;

-- Escreva uma query que exiba todas as colunas da tabela rental
SELECT 
    *
FROM
    sakila.rental;

-- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados
-- na tabela film
SELECT 
    title, description, release_year
FROM
    sakila.film;

-- Utilize o SELECT para explorar todas as tabelas do banco de dados.
select * from sakila.actor;
select * from sakila.address;
select * from sakila.category;
select * from sakila.city;
select * from sakila.country;
select * from sakila.customer;
select * from sakila.film;
select * from sakila.film_actor;
select * from sakila.film_text;
select * from sakila.inventory;
select * from sakila.language;
select * from sakila.payment;
select * from sakila.rental;
select * from sakila.staff;
select * from sakila.store;