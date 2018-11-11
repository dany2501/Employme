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
INSERT INTO `cv` VALUES (1,'EGù…∞Û1\ÿ\nmØ∏ñ˘w?I\“Iö≠ñ\œz3Gïå.[',48),(2,'EGù…∞Û1\ÿ\nmØ∏ñ˘w?I\“Iö≠ñ\œz3Gïå.[',49),(3,'EGù…∞Û1\ÿ\nmØ∏ñ˘w?I\“Iö≠ñ\œz3Gïå.[',46);
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
INSERT INTO `datosaspirante` VALUES (48,'Daniel','Hern√°ndez','C√°rdenas','dany2501@live.com','¸Oﬂâcwz†Qy\›$ı\‚\Ì','å\«”ãÒg¯ÆÅ\Á?]\‰','2001-02-25','Masculino',NULL),(49,'Daniel','Hern√°ndez','C√°rdenas','erika_jocelynh2003@hotmail.com','å\«”ãÒg¯ÆÅ\Á?]\‰','¸Oﬂâcwz†Qy\›$ı\‚\Ì','2001-02-25','Masculino',NULL),(50,'Teni','Teni','Teni','dany2501@live.com','≠\À\ﬁ,O05µ/`\nGá\Ï(ç','µ˘G.D*k“ùU<|\“¡4','2000-12-02','cpss',5510638023),(51,'Rommel','Portillo','Vazquez','ropovaz@gmail.com','©Üá∂\–v\œw.L&6:\‡ï','€∑\\\Í-àOÄ\\R]¡Nˇ','2001-02-26','Masculino',NULL);
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
INSERT INTO `datosempresa` VALUES (15,'.A•∞9≠\·æ]\ÂÉ6|','\‹˚[\”{∏“æûk\’\‚Å{h¢','dany2501@live.com','Otis S.A de C.V'),(16,'\‰!äé©\Àz[\Z\∆\’\Â\"\‰ô\“','\‹˚[\”{∏“æûk\’\‚Å{h¢','dany2501@live.com','Aurantisoft'),(17,'TKF\ﬂ.≠Mπ®⁄Æ¸>ñ','TKF\ﬂ.≠Mπ®⁄Æ¸>ñ','@@@','');
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
INSERT INTO `descripcioncv` VALUES (2,'~9Ü´∏∏\ÔV&TÒ\≈\“\ËCÑ¡\≈	b’†	qÙ\’1 ∑.Ò˝\’\Ÿ\”\÷\€d6\nø~á@!›ü/ö$kµ}æ\ÿ',47),(3,'ç\ËùÑãÀá\ÏÑ\€\ﬂ˝Ú',NULL),(4,'ç\ËùÑãÀá\ÏÑ\€\ﬂ˝Ú',NULL),(5,'ç\ËùÑãÀá\ÏÑ\€\ﬂ˝Ú',NULL),(6,'ç\ËùÑãÀá\ÏÑ\€\ﬂ˝Ú',NULL),(7,'ç\ËùÑãÀá\ÏÑ\€\ﬂ˝Ú',NULL),(8,'ç\ËùÑãÀá\ÏÑ\€\ﬂ˝Ú',NULL),(9,'ç\ËùÑãÀá\ÏÑ\€\ﬂ˝Ú',NULL),(10,'∏.möõY\‰T{>+µ',NULL),(11,'Bãõ§ï!ºQ!U^\∆Mß\·@8\"\÷?U◊êF\"¿y\∆\r≥ñ«•ä2L–Äfêî£\›- ™=´XîØbd)\À\∆8Ò≥f\‘\ﬂk\r≥gSu,\È0nÛÙµÖ\Ê*}\ÔN\ÍO\n\"Sæe=Ú¥Ô¢é£öˇ|!\ﬁ\Ï\Ê\‚H=ª\”\0\«}ÅL»Ñ∞8±;¶¢¶°ıL\ÓÿïØ#\–$Ω\Ët@h\¬fzëû\≈6ìΩ•ÀÅ\”ùë∑\«ˆ]\∆Úë =)í¡\ÿõñ¶≠*y;9\≈Y^\Ï∞Fæ∆ë|Øò§(¿à)øµÅ$#2^Ñh\ﬂ€ÖV3ˇ´•†£\rê\Îîf-Eé;$8\Ío\–i%êDdùp´`˜5⁄Ç0\Ï6Å?∞î\Ô˙Aå\Ìﬁß\€‚Øß3_õ\ 4Æ\Ë_â˝÷Øé£ú\Œ3ÄìMfxf‹®˘˛R≤\€Bµhé\‹\»\Ë%J¡Mo;ø-Y¶#`îß}∞H>a~9µ8f/e£∂≠@fúÄéQ^\◊¯zÛzVµ\ﬂ˛\Á5ø\‚î=Òo7éRó	W\‹aëZüì\À`à\ÏiMÛ\·<ûÑ\Ôùø\ÿı\—\0æ´x¯πíÉMC\‚^\Ë†¸Júr¨ˆúÛ-{$+∏ÍõîO=~Lü}WU\ÏL\ƒ^bK„éí™N•a#˙ƒà\œ{¿[[\ÕTzkÖLMsàΩ\Îò%\—',48),(12,NULL,49);
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
INSERT INTO `idiomas` VALUES (2,NULL,'∂¸`:\”nBw\ÿo5S1'),(6,48,'∂¸`:\”nBw\ÿo5S1'),(7,48,'°}úÜ°ié§´¸oD}2O'),(8,48,'æyìUÅ\€\Î?∂/.F“î'),(9,NULL,'úrI`º\»Wcåäπô\€'),(10,NULL,'úrI`º\»Wcåäπô\€'),(11,48,'`Ω<[˙î\ÿ\Êz\Óì=\ŸB');
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
INSERT INTO `perfilaspirante` VALUES (46,48,NULL,'BenjaminGuzman','GM7_we-jpfc',NULL),(47,49,NULL,NULL,NULL,'≤)9qn\ÿˇ0—ívﬁîP'),(48,50,NULL,'dany2501','cfydcydrcydcy','J\\PY`(xπÏüΩì'),(49,51,NULL,'dany2501',NULL,NULL);
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
INSERT INTO `proyectos` VALUES (1,'eÎçøb\‹¿c¿†\«\Ô∂','sÉ\ﬁ/ö#\Ë^e?¯ìpÄ]≥˜K™<î\È,lí#¶','kY^Sizµ#û?â\"\‚L',48),(2,'É¨Ñï{\≈Hú`˝±Æúˇæ','Æ6¿\Á\ﬁ¡º\›Ôëûa	˙','kY^Sizµ#û?â\"\‚L',48);
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
INSERT INTO `referencias` VALUES (1,48,'\œ?√í˛Ù˙a2á§f´µ¯	\≈(ˇù1Æ\Î¬è´OÄì\’','E!\€LmE¥z\”SΩM˝i∞','\Ê]Ú˙(Ωö´sÑH5ù˛Kø~á@!›ü/ö$kµ}æ\ÿ'),(2,48,'\n˚ﬂπß6˙\\Sâü\›]\Ê\Ô\Ë=≠£Û!ˇô','ÇKDQB¯x\…¬µÉˇ\Â[è','mä¬Ö\ Sıﬂú†ï\∆2[]Ôªê“ü˜∫yL™º\rº'),(3,48,'D8j3˘¨∂<E£\ÀÚ/fr\ÂN5ÏìßFîÉq+±','-^[$È¶∂§ßu\Ôœ≥\÷99','j§ü≠n!%\¬=xÉ»©ç[]Ôªê“ü˜∫yL™º\rº'),(4,48,'TKF\ﬂ.≠Mπ®⁄Æ¸>ñ','TKF\ﬂ.≠Mπ®⁄Æ¸>ñ','TKF\ﬂ.≠Mπ®⁄Æ¸>ñ');
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
INSERT INTO `software` VALUES (1,'@O™≤,\n˛H\Àv|ú§°Ú',48,100),(2,'-\n:äEaa∞Û¸+°\‰Cù)',48,50);
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
