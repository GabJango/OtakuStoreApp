-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 17-Set-2019 às 17:18
-- Versão do servidor: 10.3.16-MariaDB
-- versão do PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id10912564_otakustore`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `bancas`
--

CREATE TABLE `bancas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `category` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `deliveryEstimate` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `rating` int(11) NOT NULL,
  `imagePath` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `about` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hours` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `bancas`
--

INSERT INTO `bancas` (`id`, `id_name`, `name`, `category`, `deliveryEstimate`, `rating`, `imagePath`, `about`, `hours`) VALUES
(1, 'banca-lolzeiro', 'Banca Lolzeiro', 'Shoujo', '25m', 5, 'assets/img/bancas/banca_lolzeiro.png', 'A Banca Lolzeiro tem 40 anos de mercado, Compre e confira.', 'Funciona de segunda à sexta, de 8h às 23h'),
(2, 'banca-lucia', 'Banca Lucia', 'Ecchi', '100m', 4, 'assets/img/bancas/banca_lucia.png', '40 anos se especializando em Ecchi', 'Funciona todos os dias, de 10h às 22h');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bancas`
--
ALTER TABLE `bancas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_name` (`id_name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bancas`
--
ALTER TABLE `bancas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
