CREATE SCHEMA `lizard_db` ;

CREATE TABLE `issue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `summary` varchar(200) DEFAULT NULL,
  `description` longtext,
  `due_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` int(11) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `issue` (`id`, `summary`, `description`, `due_date`, `created_date`, `modified_date`, `deleted`)
VALUES
	(1,'1st issue','1st issue description','2019-03-09 14:44:52','2019-03-09 14:44:40','2019-03-09 14:44:40',0);