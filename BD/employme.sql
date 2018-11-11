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
-- Table structure for table `cv`
--

DROP TABLE IF EXISTS `cv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cv` (
  `id_cv` int(11) NOT NULL AUTO_INCREMENT,
  `ruta_cv` varbinary(150) DEFAULT NULL,
  `id_pasp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_cv`),
  KEY `id_pasp` (`id_pasp`),
  CONSTRAINT `cv_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cv`
--

LOCK TABLES `cv` WRITE;
/*!40000 ALTER TABLE `cv` DISABLE KEYS */;
INSERT INTO `cv` VALUES (1,'EG�ɰ�1\�\nm����w?I\�I���\�z3G��.[',48),(2,'EG�ɰ�1\�\nm����w?I\�I���\�z3G��.[',49),(3,'EG�ɰ�1\�\nm����w?I\�I���\�z3G��.[',46);
/*!40000 ALTER TABLE `cv` ENABLE KEYS */;
UNLOCK TABLES;

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
  `usu_asp` varbinary(100) DEFAULT NULL,
  `psw_asp` varbinary(100) DEFAULT NULL,
  `FN_asp` date NOT NULL,
  `sex_asp` varchar(20) DEFAULT NULL,
  `numtel_asp` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id_asp`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datosaspirante`
--

LOCK TABLES `datosaspirante` WRITE;
/*!40000 ALTER TABLE `datosaspirante` DISABLE KEYS */;
INSERT INTO `datosaspirante` VALUES (48,'Daniel','Hernández','Cárdenas','dany2501@live.com','�O߉cwz�Qy\�$�\�\�','�\�Ӌ�g��\�?]\�','2001-02-25','Masculino',NULL),(49,'Daniel','Hernández','Cárdenas','erika_jocelynh2003@hotmail.com','�\�Ӌ�g��\�?]\�','�O߉cwz�Qy\�$�\�\�','2001-02-25','Masculino',NULL),(50,'Teni','Teni','Teni','dany2501@live.com','�\�\�,O05�/`\nG�\�(�','��G.D*kҝU<|\��4','2000-12-02','cpss',5510638023),(51,'Rommel','Portillo','Vazquez','ropovaz@gmail.com','����\�v\�w.L&6:\��','۷\\\�-�O�\\R]�N�','2001-02-26','Masculino',NULL);
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
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger fotoRaiz after insert on datosaspirante
for each row
begin
update imgaspirante set ruta_imga="images/usuario-2.png" where id_pasp=(select id_pasp from perfilaspirante where id_asp=new.id_asp);
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
  `usu_emp` varbinary(100) DEFAULT NULL,
  `psw_emp` varbinary(100) DEFAULT NULL,
  `email_emp` varchar(100) NOT NULL,
  `nom_emp` varchar(150) NOT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datosempresa`
--

LOCK TABLES `datosempresa` WRITE;
/*!40000 ALTER TABLE `datosempresa` DISABLE KEYS */;
INSERT INTO `datosempresa` VALUES (15,'.A��9�\�]\�6|','\��[\�{�Ҿ�k\�\�{h�','dany2501@live.com','Otis S.A de C.V'),(16,'\�!���\�z[\Z\�\�\�\"\�\�','\��[\�{�Ҿ�k\�\�{h�','dany2501@live.com','Aurantisoft'),(17,'TKF\�.�M��ڮ�>�','TKF\�.�M��ڮ�>�','@@@','');
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
-- Table structure for table `descripcioncv`
--

DROP TABLE IF EXISTS `descripcioncv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `descripcioncv` (
  `id_cv` int(11) NOT NULL AUTO_INCREMENT,
  `des_cv` varbinary(1500) DEFAULT NULL,
  `id_pasp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_cv`),
  KEY `id_pasp` (`id_pasp`),
  CONSTRAINT `descripcioncv_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descripcioncv`
--

LOCK TABLES `descripcioncv` WRITE;
/*!40000 ALTER TABLE `descripcioncv` DISABLE KEYS */;
INSERT INTO `descripcioncv` VALUES (2,'~9����\�V&T�\�\�\�C��\�	bՠ	q�\�1ʷ.��\�\�\�\�\�d6\n�~�@!ݟ/�$k�}�\�',47),(3,'�\����ˇ\�\�\���',NULL),(4,'�\����ˇ\�\�\���',NULL),(5,'�\����ˇ\�\�\���',NULL),(6,'�\����ˇ\�\�\���',NULL),(7,'�\����ˇ\�\�\���',NULL),(8,'�\����ˇ\�\�\���',NULL),(9,'�\����ˇ\�\�\���',NULL),(10,'�.m��Y\�T{>+�',NULL),(11,'B����!�Q!U^\�M�\�@8\"\�?UאF\"�y\�\r��ǥ�2LЀf���\�- �=�X��bd)\�\�8�f\�\�k\r�gSu,\�0n����\�*}\�N\�O\n\"S�e=����|!\�\�\�\�H=�\�\0\�}�LȄ�8�;�����L\�ؕ�#\�$�\�t@h\�fz��\�6���ˁ\����\��]\�� =)��\�����*y;9\�Y^\�F�Ƒ|���(��)���$#2^�h\�ۅV3�����\r�\�f-E�;$8\�o\�i%�Dd�p�`�5ڂ0\�6�?��\��A�\�ާ\�⯧3_�\�4�\�_��֯���\�3��Mfxfܨ��R�\�B�h�\�\�\�%J�Mo;�-Y�#`��}�H>a~9�8f/e���@f���Q^\��z�zV�\��\�5�\�=�o7�R�	W\�a�Z��\�`�\�iM�\�<��\���\��\�\0��x����MC\�^\��J�r����-{$+�ꛔO=~L�}WU\�L\�^bK㎒�N�a#�Ĉ\�{�[[\�Tzk�LMs��\�%\�',48),(12,NULL,49);
/*!40000 ALTER TABLE `descripcioncv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `escuelas`
--

DROP TABLE IF EXISTS `escuelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `escuelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pasp` int(11) DEFAULT NULL,
  `nom_esc` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_pasp` (`id_pasp`),
  CONSTRAINT `escuelas_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `escuelas`
--

LOCK TABLES `escuelas` WRITE;
/*!40000 ALTER TABLE `escuelas` DISABLE KEYS */;
INSERT INTO `escuelas` VALUES (5,46,NULL),(6,47,NULL),(7,48,NULL),(8,49,NULL);
/*!40000 ALTER TABLE `escuelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `idiomas`
--

DROP TABLE IF EXISTS `idiomas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `idiomas` (
  `id_idio` int(11) NOT NULL AUTO_INCREMENT,
  `id_pasp` int(11) DEFAULT NULL,
  `idioma_idio` varbinary(150) DEFAULT NULL,
  PRIMARY KEY (`id_idio`),
  KEY `id_pasp` (`id_pasp`),
  CONSTRAINT `idiomas_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `idiomas`
--

LOCK TABLES `idiomas` WRITE;
/*!40000 ALTER TABLE `idiomas` DISABLE KEYS */;
INSERT INTO `idiomas` VALUES (2,NULL,'��`:\�nBw\��o5S1'),(6,48,'��`:\�nBw\��o5S1'),(7,48,'�}���i����oD}2O'),(8,48,'�y�U�\�\�?�/.FҔ'),(9,NULL,'�rI`�\�Wc����\�'),(10,NULL,'�rI`�\�Wc����\�'),(11,48,'`��<[��\�\�z\�=\�B');
/*!40000 ALTER TABLE `idiomas` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imgaspirante`
--

LOCK TABLES `imgaspirante` WRITE;
/*!40000 ALTER TABLE `imgaspirante` DISABLE KEYS */;
INSERT INTO `imgaspirante` VALUES (16,'fotosasp/Perfil.jpg',46),(17,'images/usuario-2.png',47),(18,'fotosasp/fotomia.jpg',48),(19,'fotosasp/fotomia.jpg',49);
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
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interes`
--

LOCK TABLES `interes` WRITE;
/*!40000 ALTER TABLE `interes` DISABLE KEYS */;
INSERT INTO `interes` VALUES (15,48,27),(16,48,28),(16,48,29),(15,50,30),(15,50,31),(15,50,32),(15,50,33),(15,50,34),(15,50,35),(15,50,36),(15,50,37),(15,50,38),(15,50,39),(15,50,40),(15,50,41),(15,50,42);
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
  `dir_pasp` varbinary(500) DEFAULT NULL,
  PRIMARY KEY (`id_pasp`),
  KEY `id_asp` (`id_asp`),
  CONSTRAINT `perfilaspirante_ibfk_1` FOREIGN KEY (`id_asp`) REFERENCES `datosaspirante` (`id_asp`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfilaspirante`
--

LOCK TABLES `perfilaspirante` WRITE;
/*!40000 ALTER TABLE `perfilaspirante` DISABLE KEYS */;
INSERT INTO `perfilaspirante` VALUES (46,48,NULL,'BenjaminGuzman','GM7_we-jpfc',NULL),(47,49,NULL,NULL,NULL,'�)9qn\��0ђvޔP�'),(48,50,NULL,'dany2501','cfydcydrcydcy','J\\PY`(x�쟽�'),(49,51,NULL,'dany2501',NULL,NULL);
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
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger asignaridesc after insert on perfilaspirante
for each row
begin 
insert into escuelas (id_pasp) values (new.id_pasp); 
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger asignar_id_asp after insert on perfilaspirante
for each row
begin
insert into descripcioncv (id_pasp) values (new.id_pasp);
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger setIdCv after insert on perfilaspirante 
for each row
begin
insert into cv (id_pasp) values (new.id_pasp);
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfilempresa`
--

LOCK TABLES `perfilempresa` WRITE;
/*!40000 ALTER TABLE `perfilempresa` DISABLE KEYS */;
INSERT INTO `perfilempresa` VALUES (15,13,NULL,NULL,NULL,NULL),(16,14,NULL,NULL,NULL,NULL),(17,15,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `perfilempresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyectos` (
  `id_pro` int(11) NOT NULL AUTO_INCREMENT,
  `nom_pro` varbinary(100) DEFAULT NULL,
  `puesto_pro` varbinary(100) DEFAULT NULL,
  `emp_pro` varbinary(100) DEFAULT NULL,
  `id_pasp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_pro`),
  KEY `id_pasp` (`id_pasp`),
  CONSTRAINT `proyectos_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectos`
--

LOCK TABLES `proyectos` WRITE;
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
INSERT INTO `proyectos` VALUES (1,'e덿b\��c��\�\��','s�\�/�#\�^e?��p�]��K�<�\�,l�#�','kY^Siz�#�?�\"\�L',48),(2,'����{\�H�`������','�6�\�\���\�a	�','kY^Siz�#�?�\"\�L',48);
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `referencias`
--

DROP TABLE IF EXISTS `referencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `referencias` (
  `id_ref` int(11) NOT NULL AUTO_INCREMENT,
  `id_pasp` int(11) DEFAULT NULL,
  `nom_ref` varbinary(150) DEFAULT NULL,
  `tel_ref` varbinary(100) DEFAULT NULL,
  `email_ref` varbinary(150) DEFAULT NULL,
  PRIMARY KEY (`id_ref`),
  KEY `id_pasp` (`id_pasp`),
  CONSTRAINT `referencias_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referencias`
--

LOCK TABLES `referencias` WRITE;
/*!40000 ALTER TABLE `referencias` DISABLE KEYS */;
INSERT INTO `referencias` VALUES (1,48,'�\�?Ò���a2��f���	\�(��1�\��O��\�','E!\�LmE�z\�S�M�i�','\�]��(���s�H5��K�~�@!ݟ/�$k�}�\�'),(2,48,'\n�߹�6�\\S��\�]\�\�\�=���!��','�KDQB�x\�µ��\�[�','m�\�S�ߜ��\�2[]ﻐҟ��yL��\r�'),(3,48,'D8j3���<E�\��/fr\�N5쓧F��q+�','-^[$馶��u\�ϳ\�99','j���n!%\�=x�ȩ�[]ﻐҟ��yL��\r�'),(4,48,'TKF\�.�M��ڮ�>�','TKF\�.�M��ڮ�>�','TKF\�.�M��ڮ�>�');
/*!40000 ALTER TABLE `referencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `software`
--

DROP TABLE IF EXISTS `software`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `software` (
  `id_soft` int(11) NOT NULL AUTO_INCREMENT,
  `nom_soft` varbinary(200) DEFAULT NULL,
  `id_pasp` int(11) DEFAULT NULL,
  `manejo_soft` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_soft`),
  KEY `id_pasp` (`id_pasp`),
  CONSTRAINT `software_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `software`
--

LOCK TABLES `software` WRITE;
/*!40000 ALTER TABLE `software` DISABLE KEYS */;
INSERT INTO `software` VALUES (1,'@O��,\n�H\�v|����',48,100),(2,'-\n:�Eaa���+�\�C�)',48,50);
/*!40000 ALTER TABLE `software` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-10 23:41:35
