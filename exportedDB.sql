CREATE DATABASE  IF NOT EXISTS `employee_directory` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `employee_directory`;
-- MySQL dump 10.13  Distrib 5.7.12, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: employee_directory
-- ------------------------------------------------------
-- Server version	5.7.12

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
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `managerId` int(10) unsigned NOT NULL,
  `title` varchar(30) NOT NULL,
  `department` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_managerId` (`managerId`),
  CONSTRAINT `fk_managerId` FOREIGN KEY (`managerId`) REFERENCES `employee` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Charles Montgomery','Burns',12,'President and CEO','Engineering'),(2,'Bart','Simpson',1,'VP of Marketing','Marketing'),(3,'Marge','Simpson',1,'CFO','Accounting'),(4,'Lisa','Simpson',1,'VP of Engineering','Engineering'),(5,'Maggie','Simpson',1,'VP of Sales','Sales'),(6,'Homer','Simpson',4,'QA Manager','Corporate'),(7,'Ned','Flanders',4,'Software Architect','Engineering'),(8,'Krusty','The Clown',2,'Marketing Manager','Marketing'),(9,'Waylon','Smithers',2,'Marketing Manager','Marketing'),(10,'Ralph','Wiggum',5,'Sales Representative','Sales'),(11,'Itchy','',5,'Sales Representative','Sales'),(12,'Comic Book Guy','',4,'Software Architect','Engineering');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employeeContacts`
--

DROP TABLE IF EXISTS `employeeContacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employeeContacts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `fk_employeeId` int(10) unsigned NOT NULL,
  `email` varchar(40) NOT NULL,
  `city` varchar(30) NOT NULL,
  `picture` varchar(30) DEFAULT NULL,
  `twitterId` varchar(16) DEFAULT NULL,
  `blog` varchar(80) DEFAULT NULL,
  `cellPhone` varchar(20) DEFAULT NULL,
  `officePhone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_employeeId` (`fk_employeeId`),
  CONSTRAINT `employeeContacts_ibfk_1` FOREIGN KEY (`fk_employeeId`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeeContacts`
--

LOCK TABLES `employeeContacts` WRITE;
/*!40000 ALTER TABLE `employeeContacts` DISABLE KEYS */;
INSERT INTO `employeeContacts` VALUES (1,1,'burns@the-simpsons.com','Springfield','mr_burns.png','@burns','http://www.brightcomputing.com','+31 000 000 001','+31 600 000 001'),(2,2,'bart@the-simpsons.com','Springfield','bart.png','@bart','http://www.brightcomputing.com','+31 000 000 002','+31 600 000 002'),(3,3,'marge@the-simpsons.com','Springfield','marge.png','@marge','http://www.brightcomputing.com','+31 000 000 003','+31 600 000 003'),(4,4,'lisa@the-simpsons.com','Springfield','lisa.png','@lisa','http://www.brightcomputing.com','+31 000 000 004','+31 600 000 004'),(5,5,'maggie@the-simpsons.com','Springfield','maggie.png','@maggie','http://www.brightcomputing.com','+31 000 000 005','+31 600 000 005'),(6,6,'homer@the-simpsons.com','Springfield','homer.png','@homer','http://www.brightcomputing.com','+31 000 000 006','+31 600 000 006'),(7,7,'ned@the-simpsons.com','Springfield','ned_flanders.png','@ned','http://www.brightcomputing.com','+31 000 000 007','+31 600 000 007'),(8,8,'krusty@the-simpsons.com','Springfield','krusty.png','@krusty','http://www.brightcomputing.com','+31 000 000 008','+31 600 000 008'),(9,9,'smithers@the-simpsons.com','Springfield','smithers.png','@smithers','http://www.brightcomputing.com','+31 000 000 009','+31 600 000 009'),(10,10,'ralph@the-simpsons.com','Springfield','ralph.png','@ralph','http://www.brightcomputing.com','+31 000 000 010','+31 600 000 010'),(11,11,'itchy@the-simpsons.com','Springfield','itchy.png','@itchy','http://www.brightcomputing.com','+31 000 000 011','+31 600 000 011'),(12,12,'comicguy@the-simpsons.com','Springfield','comic.png','@comicguy','http://www.brightcomputing.com','+31 000 000 012','+31 600 000 012');
/*!40000 ALTER TABLE `employeeContacts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-05-07 14:47:38
