-- 3 - Tipos de dados
-- Existem vários tipos de dados no MySQL que vão além de apenas numéricos e strings. É relevante que você 
-- tenha uma noção básica, sabendo que esses tipos no MySQL são determinados por meio
-- de algumas características:

-- Tipo de valor que representa;
-- O espaço ocupado e se possui comprimento fixo ou variável;
-- Se os valores podem ser indexados ou não;
-- Comparação de valores de um tipo de dado específico pelo MySQL .
-- Os principais tipos de dados do MySQL são:

-- Tipos de String
-- VARCHAR : Uma string não binária de comprimento variável;
-- CHAR : Uma string não binária (caractere) de comprimento fixo;
-- TEXT : Uma pequena string não binária.

-- Tipos Numéricos
-- TYNINT : Um número inteiro muito pequeno;
-- INT : Um inteiro padrão;
-- BIGINT : Um grande número inteiro;
-- DECIMAL : Um número de ponto fixo.

SET @my_school = 'BeTrybe';
SELECT @my_school;