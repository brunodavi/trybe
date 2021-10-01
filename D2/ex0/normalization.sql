DROP DATABASE `normalization`;

CREATE SCHEMA IF NOT EXISTS `normalization` ;
USE `normalization` ;


CREATE TABLE `Funcionarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `telefone` BIGINT NULL,
  `create` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE `Setor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE `Funcionarios_Setor` (
    `funcionarios_id` INT NOT NULL,
    `setor_id` INT NOT NULL,
    PRIMARY KEY (`funcionarios_id` , `setor_id`),
    FOREIGN KEY (`funcionarios_id`)
        REFERENCES `normalization`.`Funcionarios` (`id`)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (`setor_id`)
        REFERENCES `normalization`.`Setor` (`id`)
        ON DELETE NO ACTION ON UPDATE NO ACTION
)  ENGINE=INNODB;


INSERT INTO `Funcionarios`
  (`first_name`, `last_name`, `email`, `telefone`, `create`)
VALUES
  ('Joseph', 'Rodrigues', 'jo@gmail.com	', 359985521445, '2020-05-05'),
  ('André', 'Freeman', 'andre1990@gmail.com	', 47995224996, '2020-02-05'),
  ('Cíntia', 'Duval', 'cindy@outlook.com', 33998554669, '2020-05-05'),
  ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', 33992001556, '2020-05-05');

INSERT INTO `Setor`
  (`name`)
VALUES
  ('Administação'),
  ('Vendas'),
  ('Operacional'),
  ('Estratégico'),
  ('Marketing');

INSERT INTO `Funcionarios_Setor`
  (`funcionarios_id`, `setor_id`)
VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (3, 3),
  (3, 2),
  (4, 2);
