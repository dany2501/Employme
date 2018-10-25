-- MySQL dump 10.13  Distrib 5.7.21, for Win64 (x86_64)
--
-- Host: localhost    Database: employme
-- ------------------------------------------------------
-- Server version	5.7.21-log

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
-- Table structure for table `datosaspirante`
--

DROP TABLE IF EXISTS `datosaspirante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `datosaspirante` (
  `id_asp` int(11) NOT NULL AUTO_INCREMENT,
  `nom_asp` varchar(50) NOT NULL,
  `apt_asp` varchar(30) NOT NULL,
  `apm_asp` varchar(30) NOT NULL,
  `email_asp` varchar(50) NOT NULL,
  `usu_asp` varchar(30) NOT NULL,
  `psw_asp` varchar(50) NOT NULL,
  `FN_asp` date NOT NULL,
  `sex_asp` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_asp`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datosaspirante`
--

LOCK TABLES `datosaspirante` WRITE;
/*!40000 ALTER TABLE `datosaspirante` DISABLE KEYS */;
INSERT INTO `datosaspirante` VALUES (33,'Rommel','Portillo','Vazquez','nuevoscamos@outlook.com','rommel123','rommel','2001-02-26',NULL),(34,'Arturo','Geronimo','Gomez','poisonflunky@gmail.com','romelillo','otabio','2001-10-20','Masculino'),(35,'Daniel','Hernández','Hernández','dany2501.dhn@gmail.com','nexuss','daniel','2001-02-25','Masculino'),(36,'Daniel','Hernández','Cárdenas','dany2501@live.com','daniel','123456','2001-02-25','Masculino'),(37,'cosa','cosa','cosa','cosa<<<<@ho','ho','ho','0001-01-30','cpss'),(38,'Daniel','Hernández','Cárdenas','dany250102.dhn@gmail.com','danny2501','daniel','2001-01-25',NULL),(39,'Erika','Hernández','Cárdenas','nuevoscamos@outlook.com','erika_1233','123456','0200-02-16',NULL),(40,'asfas','qjk','hjh','jkh','kjh','123456','2003-02-16',NULL);
/*!40000 ALTER TABLE `datosaspirante` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger asignaridasp after insert on datosaspirante
for each row
begin
insert into perfilaspirante set id_asp= new.id_asp;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `datosempresa`
--

DROP TABLE IF EXISTS `datosempresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `datosempresa` (
  `id_emp` int(11) NOT NULL AUTO_INCREMENT,
  `usu_emp` varchar(50) NOT NULL,
  `psw_emp` varchar(50) NOT NULL,
  `email_emp` varchar(100) NOT NULL,
  `nom_emp` varchar(150) NOT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datosempresa`
--

LOCK TABLES `datosempresa` WRITE;
/*!40000 ALTER TABLE `datosempresa` DISABLE KEYS */;
INSERT INTO `datosempresa` VALUES (10,'otis','123456','dany2501@live.com','Otis S.A de C.V'),(11,'auranti_soft','123456','aurantisoft@gmail.com','Aurantisoft');
/*!40000 ALTER TABLE `datosempresa` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger asignaridemp after insert on datosempresa
for each row
begin
insert into perfilempresa set id_emp= new.id_emp;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `imgaspirante`
--

DROP TABLE IF EXISTS `imgaspirante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imgaspirante` (
  `id_imga` int(11) NOT NULL AUTO_INCREMENT,
  `ruta_imga` varchar(500) DEFAULT NULL,
  `id_pasp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_imga`),
  KEY `id_pasp` (`id_pasp`),
  CONSTRAINT `imgaspirante_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imgaspirante`
--

LOCK TABLES `imgaspirante` WRITE;
/*!40000 ALTER TABLE `imgaspirante` DISABLE KEYS */;
INSERT INTO `imgaspirante` VALUES (1,'fotosasp/segunda foto.jpg',31),(2,'fotosasp/employee.jpg',32),(3,'fotosasp/fotomia.jpg',33),(4,'fotosasp/fotomia.jpg',34),(5,'fotosasp/employee.jpg',35),(6,NULL,36),(7,NULL,37),(8,NULL,38);
/*!40000 ALTER TABLE `imgaspirante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imgempresa`
--

DROP TABLE IF EXISTS `imgempresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imgempresa` (
  `id_imge` int(11) NOT NULL AUTO_INCREMENT,
  `ruta_imge` varchar(100) NOT NULL,
  `id_pemp` int(11) NOT NULL,
  PRIMARY KEY (`id_imge`),
  KEY `id_pemp` (`id_pemp`),
  CONSTRAINT `imgempresa_ibfk_1` FOREIGN KEY (`id_pemp`) REFERENCES `perfilempresa` (`id_pemp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imgempresa`
--

LOCK TABLES `imgempresa` WRITE;
/*!40000 ALTER TABLE `imgempresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `imgempresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interes`
--

DROP TABLE IF EXISTS `interes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `interes` (
  `id_emp` int(11) DEFAULT NULL,
  `id_asp` int(11) DEFAULT NULL,
  `id_inte` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_inte`),
  KEY `id_emp` (`id_emp`),
  KEY `id_asp` (`id_asp`),
  CONSTRAINT `interes_ibfk_1` FOREIGN KEY (`id_emp`) REFERENCES `datosempresa` (`id_emp`),
  CONSTRAINT `interes_ibfk_2` FOREIGN KEY (`id_asp`) REFERENCES `datosaspirante` (`id_asp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interes`
--

LOCK TABLES `interes` WRITE;
/*!40000 ALTER TABLE `interes` DISABLE KEYS */;
/*!40000 ALTER TABLE `interes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfilaspirante`
--

DROP TABLE IF EXISTS `perfilaspirante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perfilaspirante` (
  `id_pasp` int(11) NOT NULL AUTO_INCREMENT,
  `id_asp` int(11) NOT NULL,
  `carrera_pasp` varchar(100) DEFAULT NULL,
  `usugh_pasp` varchar(50) DEFAULT NULL,
  `vyt_pasp` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_pasp`),
  KEY `id_asp` (`id_asp`),
  CONSTRAINT `perfilaspirante_ibfk_1` FOREIGN KEY (`id_asp`) REFERENCES `datosaspirante` (`id_asp`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfilaspirante`
--

LOCK TABLES `perfilaspirante` WRITE;
/*!40000 ALTER TABLE `perfilaspirante` DISABLE KEYS */;
INSERT INTO `perfilaspirante` VALUES (31,33,NULL,NULL,NULL),(32,34,NULL,'BenjaminGuzman','knqzPSxx8Kc'),(33,35,NULL,NULL,NULL),(34,36,NULL,NULL,NULL),(35,37,NULL,NULL,NULL),(36,38,NULL,NULL,NULL),(37,39,NULL,NULL,NULL),(38,40,NULL,NULL,NULL);
/*!40000 ALTER TABLE `perfilaspirante` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger asignaridimga after insert on perfilaspirante
for each row
begin
insert into imgaspirante (id_pasp) values (new.id_pasp) ;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `perfilempresa`
--

DROP TABLE IF EXISTS `perfilempresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perfilempresa` (
  `id_emp` int(11) NOT NULL,
  `id_pemp` int(11) NOT NULL AUTO_INCREMENT,
  `des_emp` varchar(250) DEFAULT NULL,
  `ubi_pemp` varchar(200) DEFAULT NULL,
  `cat_pemp` varchar(200) DEFAULT NULL,
  `id_imge` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_pemp`),
  KEY `id_emp` (`id_emp`),
  KEY `id_imge` (`id_imge`),
  CONSTRAINT `perfilempresa_ibfk_1` FOREIGN KEY (`id_emp`) REFERENCES `datosempresa` (`id_emp`),
  CONSTRAINT `perfilempresa_ibfk_2` FOREIGN KEY (`id_imge`) REFERENCES `imgempresa` (`id_imge`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfilempresa`
--

LOCK TABLES `perfilempresa` WRITE;
/*!40000 ALTER TABLE `perfilempresa` DISABLE KEYS */;
INSERT INTO `perfilempresa` VALUES (10,8,NULL,NULL,NULL,NULL),(11,9,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `perfilempresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefonosempresa`
--

DROP TABLE IF EXISTS `telefonosempresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `telefonosempresa` (
  `id_emp` int(11) NOT NULL,
  `num_temp` int(11) NOT NULL,
  `id_temp` int(11) NOT NULL,
  PRIMARY KEY (`id_temp`),
  KEY `id_emp` (`id_emp`),
  CONSTRAINT `telefonosempresa_ibfk_1` FOREIGN KEY (`id_emp`) REFERENCES `datosempresa` (`id_emp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefonosempresa`
--

LOCK TABLES `telefonosempresa` WRITE;
/*!40000 ALTER TABLE `telefonosempresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefonosempresa` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-25  0:03:46
