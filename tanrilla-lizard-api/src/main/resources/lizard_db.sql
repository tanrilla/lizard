CREATE SCHEMA `lizard_db` ;

CREATE TABLE `lizard_db`.`issue` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(200) NULL,
  `userId` INT NULL,
  PRIMARY KEY (`id`));
