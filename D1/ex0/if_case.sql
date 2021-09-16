-- Sintaxe: IF
-- SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso);

SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade')
FROM pessoas;

SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida')
FROM estabelecimentos;

SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;


-- Sintaxe: CASE
-- SELECT CASE
--   WHEN condicao THEN valor
--   ELSE valor padrao
-- END;

SELECT
    nome,
    nivel_acesso,
    CASE
        WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
        WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
        WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
        ELSE 'Usuário sem acesso'
    END AS nivel_acesso
FROM permissoes_usuario;

SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;


-- [ Exercíces ]

-- Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada 'conheço o
-- filme? Em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '. Caso seja, exiba "Já assisti a esse
-- filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da
-- condicional.
SELECT 
    title,
    IF(title = 'ACE GOLDFINGER',
        'Já assisti esse filme',
        'Não conheço o filme')
FROM
    sakila.film;

-- Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating ) e uma coluna extra que vamos chamar de 'público-alvo' , em que classificaremos o filme de acordo com as seguintes siglas:

-- G: "Livre para todos";
-- PG: "Não recomendado para menores de 10 anos";
-- PG-13: "Não recomendado para menores de 13 anos";
-- R: "Não recomendado para menores de 17 anos";
-- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".

SELECT 
    title,
    rating,
    CASE rating
        WHEN 'G' THEN 'Livre para todos'
        WHEN 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END as classificação
FROM
    sakila.film;

