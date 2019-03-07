-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-02-2019 a las 14:10:37
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ayuntamiento`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tramites`
--

CREATE TABLE `tramites` (
  `id_tramite` int(11) NOT NULL,
  `nombre_tramite` varchar(50) CHARACTER SET utf8 NOT NULL,
  `contenido_tramite` varchar(300) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tramites`
--

INSERT INTO `tramites` (`id_tramite`, `nombre_tramite`, `contenido_tramite`) VALUES
(1, 'Certificado de delitos sexuales', 'delitosSexualesPDF()'),
(2, 'Certificado de empadronamiento', 'empadronamientoPDF()'),
(3, 'Certificado de fe de vida y estado', 'feDeVidaYEstado()');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `correo_usu` varchar(30) DEFAULT NULL,
  `clave_usu` varchar(30) DEFAULT NULL,
  `fechalta_usu` date DEFAULT NULL,
  `nif_usu` varchar(9) DEFAULT NULL,
  `nombre_usu` varchar(30) DEFAULT NULL,
  `ape1_usu` varchar(30) DEFAULT NULL,
  `ape2_usu` varchar(30) DEFAULT NULL,
  `fechnac_usu` date DEFAULT NULL,
  `lugar_usu` varchar(30) DEFAULT NULL,
  `calle_usu` varchar(30) DEFAULT NULL,
  `numero_usu` int(11) DEFAULT NULL,
  `piso_usu` varchar(20) DEFAULT NULL,
  `letra_usu` varchar(30) DEFAULT NULL,
  `ciudad_usu` varchar(30) DEFAULT NULL,
  `codpost_usu` int(5) DEFAULT NULL,
  `pais_usu` varchar(30) DEFAULT NULL,
  `delito_usu` tinyint(1) DEFAULT NULL,
  `estado_usu` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `correo_usu`, `clave_usu`, `fechalta_usu`, `nif_usu`, `nombre_usu`, `ape1_usu`, `ape2_usu`, `fechnac_usu`, `lugar_usu`, `calle_usu`, `numero_usu`, `piso_usu`, `letra_usu`, `ciudad_usu`, `codpost_usu`, `pais_usu`, `delito_usu`, `estado_usu`) VALUES
(1, 'carlos@carlos.es', 'carloscarlos', '2018-01-20', '56479824D', 'Carlos', 'Sanz', 'Coll', '1995-02-01', 'Alicante', 'Calle Ferrán', 14, '2', 'A', 'Madrid', 28031, 'España', 0, 0),
(2, 'caodincaodin@caodin.es', 'caodincaodin', '2018-01-08', '57689707P', 'Caodin', 'Coll', 'Sanz', '1994-12-19', 'Madrid', 'Calle avenida', 1, '5', 'E', 'Madrid', 28029, 'EspaÃƒÂ±a', 0, 0),
(3, 'julen@julen.at', 'julenjulen', '2019-01-14', '73143028V', 'Julen', 'Martin', 'Renteiro', '2019-01-08', 'Huarte', 'Calle Rentero', 1, 'Bajo', 'B', 'Madrid', 28028, 'Espana', 1, 0),
(5, 'ana@ana.es', 'anaanaana', '2019-01-02', '12345678A', 'Ana', 'Moca', 'Lin', '2019-01-02', 'Pamplona', 'Avenida de los Paletos', 1, '2', 'A', 'Madrid', 28016, 'Espana', 1, 0),
(12, 'eva@eva.es', 'evaevaeva', '2019-01-23', '12312343B', 'Eva', 'Lluis', 'Perez', '2019-01-09', 'Valencia', 'Calle del lechero', 4, '6', 'D', 'Madrid', 28015, 'Espana', 1, 0),
(13, 'Ã±a@Ã±a.gmail.com', '123456789', '2019-01-31', '123456789', 'aaaaa', 'aaaaa', 'aaaaa', '2019-01-24', 'CataluÃ±a', 'b', 3, '20', 'a', 'Madrid', 28027, 'EspaÃ±a', 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tramites`
--
ALTER TABLE `tramites`
  ADD PRIMARY KEY (`id_tramite`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tramites`
--
ALTER TABLE `tramites`
  MODIFY `id_tramite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
