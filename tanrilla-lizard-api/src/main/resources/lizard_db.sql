CREATE DATABASE  IF NOT EXISTS `lizard_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `lizard_db`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lizard_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` longtext,
  `issueId` int(11) NOT NULL,
  `createdDate` timestamp(6) NULL DEFAULT NULL,
  `modifiedDate` timestamp(6) NULL DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `issueId` (`issueId`),
  KEY `createdBy` (`createdBy`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`issueId`) REFERENCES `issue` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (19,'{\"blocks\":[{\"key\":\"a04ds\",\"text\":\"demo1\",\"type\":\"blockquote\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"},{\"offset\":0,\"length\":5,\"style\":\"ITALIC\"},{\"offset\":0,\"length\":5,\"style\":\"UNDERLINE\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}',13,NULL,NULL,1),(20,'{\"blocks\":[{\"key\":\"bocte\",\"text\":\"Peru 2021\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":9,\"style\":\"UNDERLINE\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}',13,NULL,NULL,1),(21,'{\"blocks\":[{\"key\":\"dat0s\",\"text\":\"Ricardo Figueroa Cesar Kina \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":0,\"length\":16,\"key\":0},{\"offset\":17,\"length\":10,\"key\":1}],\"data\":{}},{\"key\":\"80dbk\",\"text\":\"Hi, please review this issue.\",\"type\":\"header-five\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"fmk9j\",\"text\":\"Regards\",\"type\":\"header-five\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"bvjjn\",\"text\":\"Juan\",\"type\":\"header-five\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"mention\",\"mutability\":\"SEGMENTED\",\"data\":{\"mention\":{\"name\":\"Ricardo Figueroa\",\"link\":\"https://twitter.com/mrussell247\",\"avatar\":\"https://media.licdn.com/dms/image/C4D03AQGZ_tE8xE863Q/profile-displayphoto-shrink_100_100/0?e=1559174400&v=beta&t=kyPbfWcy631ypKOCmqsTku9_jlqJ1V1d9thKMfgateI\"}}},\"1\":{\"type\":\"mention\",\"mutability\":\"SEGMENTED\",\"data\":{\"mention\":{\"name\":\"Cesar Kina\",\"link\":\"https://twitter.com/juliandoesstuff\",\"avatar\":\"https://media.licdn.com/dms/image/C4D03AQGXtklNLc6j7g/profile-displayphoto-shrink_800_800/0?e=1559174400&v=beta&t=yFqoZs-pUrKIANpBDmTkTkHOGgJRYtUCDwScHmp603w\"}}}}}',13,NULL,NULL,1),(22,'{\"blocks\":[{\"key\":\"4ktq6\",\"text\":\"Comment 1!!\",\"type\":\"blockquote\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":11,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}',12,NULL,NULL,1),(23,'{\"blocks\":[{\"key\":\"cjbn6\",\"text\":\"Peru 2021\",\"type\":\"ordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":9,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}',17,NULL,NULL,1),(24,'{\"blocks\":[{\"key\":\"f3p3p\",\"text\":\"Ricardo Figueroa Demo!!!\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}',15,NULL,NULL,1),(25,'{\"blocks\":[{\"key\":\"60jal\",\"text\":\"Hi All, We are reviewing this issue.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":36,\"style\":\"ITALIC\"},{\"offset\":0,\"length\":36,\"style\":\"CODE\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}',14,NULL,NULL,1);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue`
--

DROP TABLE IF EXISTS `issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `issue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `summary` varchar(200) DEFAULT NULL,
  `description` longtext,
  `dueDate` timestamp(6) NULL DEFAULT NULL,
  `projectId` int(11) NOT NULL,
  `createdDate` timestamp(6) NULL DEFAULT NULL,
  `modifiedDate` timestamp(6) NULL DEFAULT NULL,
  `assigneeId` int(11) DEFAULT NULL,
  `statusId` int(11) DEFAULT NULL,
  `priorityId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `projectId` (`projectId`),
  KEY `assigneeId` (`assigneeId`),
  KEY `statusId` (`statusId`),
  KEY `priorityId` (`priorityId`),
  KEY `typeId` (`typeId`),
  CONSTRAINT `issue_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `project` (`id`),
  CONSTRAINT `issue_ibfk_2` FOREIGN KEY (`assigneeId`) REFERENCES `user` (`id`),
  CONSTRAINT `issue_ibfk_3` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`),
  CONSTRAINT `issue_ibfk_4` FOREIGN KEY (`priorityId`) REFERENCES `priority` (`id`),
  CONSTRAINT `issue_ibfk_5` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue`
--

LOCK TABLES `issue` WRITE;
/*!40000 ALTER TABLE `issue` DISABLE KEYS */;
INSERT INTO `issue` VALUES (12,'1st issue','1st issue description','2019-03-09 19:44:52.000000',1,'2019-03-09 19:44:40.000000','2019-03-09 19:44:40.000000',2,2,1,1),(13,'issue test 3','issue test','2019-03-09 20:14:54.000000',1,'2019-03-09 20:14:54.000000','2019-03-09 20:14:54.000000',1,3,1,1),(14,'issue test 4','issue test',NULL,1,'2019-03-09 20:15:16.000000','2019-03-09 20:15:16.000000',2,2,1,1),(15,'issue test 5','issue test',NULL,1,'2019-03-09 20:17:45.000000','2019-03-09 20:17:45.000000',2,1,1,1),(16,'issue test 222','issue test','2019-03-11 19:44:52.000000',1,'2019-03-09 20:22:24.000000','2019-03-09 20:22:24.000000',1,1,1,1),(17,'issue test 1713','issue test','2019-03-11 00:44:52.000000',1,'2019-03-23 19:49:35.000000',NULL,1,1,NULL,1);
/*!40000 ALTER TABLE `issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issuelabel`
--

DROP TABLE IF EXISTS `issuelabel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `issuelabel` (
  `issueId` int(11) NOT NULL,
  `labelId` int(11) NOT NULL,
  PRIMARY KEY (`issueId`,`labelId`),
  KEY `labelId` (`labelId`),
  CONSTRAINT `issuelabel_ibfk_1` FOREIGN KEY (`issueId`) REFERENCES `issue` (`id`),
  CONSTRAINT `issuelabel_ibfk_2` FOREIGN KEY (`labelId`) REFERENCES `label` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issuelabel`
--

LOCK TABLES `issuelabel` WRITE;
/*!40000 ALTER TABLE `issuelabel` DISABLE KEYS */;
INSERT INTO `issuelabel` VALUES (12,1),(12,2);
/*!40000 ALTER TABLE `issuelabel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `label` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
INSERT INTO `label` VALUES (1,'sprint1'),(2,'my release');
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `priority`
--

DROP TABLE IF EXISTS `priority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `priority` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `priority`
--

LOCK TABLES `priority` WRITE;
/*!40000 ALTER TABLE `priority` DISABLE KEYS */;
INSERT INTO `priority` VALUES (1,'P1'),(2,'P2'),(3,'P3');
/*!40000 ALTER TABLE `priority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL DEFAULT '',
  `shortName` varchar(10) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'Lizard','LIZ');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'OPEN'),(2,'IN PROGRESS'),(3,'DONE');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'Defect'),(2,'New Feature'),(3,'Improvement');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(200) DEFAULT NULL,
  `lastName` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Cesar','K'),(2,'Ricardo','F');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-27 17:19:17
