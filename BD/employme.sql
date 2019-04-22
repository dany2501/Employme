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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id_adm` int(11) NOT NULL AUTO_INCREMENT,
  `email_adm` varbinary(200) DEFAULT NULL,
  `psw_adm` varbinary(500) DEFAULT NULL,
  PRIMARY KEY (`id_adm`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cv`
--

DROP TABLE IF EXISTS `cv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cv` (
  `id_cv` int(11) NOT NULL AUTO_INCREMENT,
  `ruta_cv` varbinary(1500) DEFAULT NULL,
  `id_pasp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_cv`),
  KEY `id_pasp` (`id_pasp`),
  CONSTRAINT `cv_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `datosaspirante`
--

DROP TABLE IF EXISTS `datosaspirante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `datosaspirante` (
  `id_asp` int(11) NOT NULL AUTO_INCREMENT,
  `nom_asp` varchar(200) DEFAULT NULL,
  `email_asp` varchar(50) NOT NULL,
  `usu_asp` varbinary(100) DEFAULT NULL,
  `psw_asp` varbinary(100) DEFAULT NULL,
  `FN_asp` date NOT NULL,
  `sex_asp` varchar(20) DEFAULT NULL,
  `numtel_asp` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id_asp`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `asignaridasp` AFTER INSERT ON `datosaspirante` FOR EACH ROW begin
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
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `fotoRaiz` AFTER INSERT ON `datosaspirante` FOR EACH ROW begin
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
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `asignaridemp` AFTER INSERT ON `datosempresa` FOR EACH ROW begin
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
  CONSTRAINT `descripcioncv_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `escuelas`
--

DROP TABLE IF EXISTS `escuelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `escuelas` (
  `id_esc` int(11) NOT NULL AUTO_INCREMENT,
  `nom_esc` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_esc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `idiomas`
--

DROP TABLE IF EXISTS `idiomas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `idiomas` (
  `id_idio` int(11) NOT NULL AUTO_INCREMENT,
  `idioma_idio` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_idio`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  CONSTRAINT `imgaspirante_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `imgempresa`
--

DROP TABLE IF EXISTS `imgempresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imgempresa` (
  `id_imge` int(11) NOT NULL AUTO_INCREMENT,
  `ruta_imge` varchar(100) DEFAULT NULL,
  `id_pemp` int(11) NOT NULL,
  PRIMARY KEY (`id_imge`),
  KEY `id_pemp` (`id_pemp`),
  CONSTRAINT `imgempresa_ibfk_1` FOREIGN KEY (`id_pemp`) REFERENCES `perfilempresa` (`id_pemp`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  CONSTRAINT `interes_ibfk_1` FOREIGN KEY (`id_emp`) REFERENCES `datosempresa` (`id_emp`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `interes_ibfk_2` FOREIGN KEY (`id_asp`) REFERENCES `datosaspirante` (`id_asp`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  CONSTRAINT `perfilaspirante_ibfk_1` FOREIGN KEY (`id_asp`) REFERENCES `datosaspirante` (`id_asp`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `asignaridimga` AFTER INSERT ON `perfilaspirante` FOR EACH ROW begin
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
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `asignar_id_asp` AFTER INSERT ON `perfilaspirante` FOR EACH ROW begin
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
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `setIdCv` AFTER INSERT ON `perfilaspirante` FOR EACH ROW begin
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
  `des_emp` varchar(1000) DEFAULT NULL,
  `ubi_pemp` varchar(200) DEFAULT NULL,
  `cat_pemp` varchar(200) DEFAULT NULL,
  `sitio_pemp` varchar(200) DEFAULT NULL,
  `numtel_pemp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_pemp`),
  KEY `id_emp` (`id_emp`),
  CONSTRAINT `perfilempresa_ibfk_1` FOREIGN KEY (`id_emp`) REFERENCES `datosempresa` (`id_emp`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `setIdimge` AFTER INSERT ON `perfilempresa` FOR EACH ROW begin
insert into imgempresa (id_pemp) values (new.id_pemp);
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
  CONSTRAINT `proyectos_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  CONSTRAINT `referencias_ibfk_1` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `relidioasp`
--

DROP TABLE IF EXISTS `relidioasp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `relidioasp` (
  `id_relidioasp` int(11) NOT NULL AUTO_INCREMENT,
  `id_idio` int(11) DEFAULT NULL,
  `id_pasp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_relidioasp`),
  KEY `id_idio` (`id_idio`),
  KEY `id_pasp` (`id_pasp`),
  CONSTRAINT `relidioasp_ibfk_1` FOREIGN KEY (`id_idio`) REFERENCES `idiomas` (`id_idio`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `relidioasp_ibfk_2` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `relsoftasp`
--

DROP TABLE IF EXISTS `relsoftasp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `relsoftasp` (
  `id_rel` int(11) NOT NULL AUTO_INCREMENT,
  `id_soft` int(11) DEFAULT NULL,
  `id_pasp` int(11) DEFAULT NULL,
  `niv_soft` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_rel`),
  KEY `id_soft` (`id_soft`),
  KEY `id_pasp` (`id_pasp`),
  CONSTRAINT `relsoftasp_ibfk_1` FOREIGN KEY (`id_soft`) REFERENCES `software` (`id_soft`),
  CONSTRAINT `relsoftasp_ibfk_2` FOREIGN KEY (`id_pasp`) REFERENCES `perfilaspirante` (`id_pasp`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `software`
--

DROP TABLE IF EXISTS `software`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `software` (
  `id_soft` int(11) NOT NULL AUTO_INCREMENT,
  `nom_soft` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_soft`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-21 20:00:16
