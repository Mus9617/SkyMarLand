-- phpMyAdmin SQL Dump
-- version 5.2.1-2.fc39
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 03 mai 2024 à 10:16
-- Version du serveur : 10.5.23-MariaDB
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `SkyMarLand`
--

-- --------------------------------------------------------

--
-- Structure de la table `td_category`
--

CREATE TABLE `td_category` (
  `id` varchar(36) NOT NULL,
  `display_name` varchar(32) DEFAULT NULL,
  `slug` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `td_model`
--

CREATE TABLE `td_model` (
  `id` varchar(36) NOT NULL,
  `category_id` varchar(36) DEFAULT NULL,
  `display_name` varchar(32) DEFAULT NULL,
  `slug` varchar(32) DEFAULT NULL,
  `nm_limit` varchar(32) DEFAULT NULL,
  `speed` int(16) DEFAULT NULL,
  `seats` int(16) DEFAULT NULL,
  `max_kg` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `td_model`
--

INSERT INTO `td_model` (`id`, `category_id`, `display_name`, `slug`, `nm_limit`, `speed`, `seats`, `max_kg`) VALUES
('153fae9d-cfcf-49b5-b600-0d43d6b16806', 'Jet', 'CHALLENGER 850', NULL, '2811', 459, 15, 53000),
('1b49b182-e3ed-462b-9966-3ede1321ec73', 'Monomotor', 'CESSNA 182T G1000', NULL, '930', 145, 4, 3100),
('4a61b9f6-6dd5-400c-b136-f13a979315e9', 'Monomotor', 'TECNAM P2008', NULL, '700', 120, 2, 1320),
('6ea8b1ea-bd47-442b-9180-8ff94c4a6daf', 'Jet', 'CESSNA CITATION CJ4', NULL, '2.000 NM', 451, 10, 17110),
('ed11a86b-e297-4c5c-8073-c4cdc31f02e9', 'Jet', 'THE PLIATUS PC-24', NULL, '2000', 440, 6, 18300);

-- --------------------------------------------------------

--
-- Structure de la table `td_rent`
--

CREATE TABLE `td_rent` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) DEFAULT NULL,
  `vehicle_id` varchar(36) DEFAULT NULL,
  `datestart` date NOT NULL,
  `dateend` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `td_rent`
--

INSERT INTO `td_rent` (`id`, `user_id`, `vehicle_id`, `datestart`, `dateend`) VALUES
('5cc9f94c-9e59-4e7f-9df3-570cee5f5bc1', '36e2dab3-1d66-4205-899e-f2cecc56d7ab', '6ea8b1ea-bd47-442b-9180-8ff94c4a6daf', '2024-05-01', '2024-05-02'),
('7b4364c7-6628-4117-94b0-b23f3b8e64e8', '36e2dab3-1d66-4205-899e-f2cecc56d7ab', '4a61b9f6-6dd5-400c-b136-f13a979315e9', '2024-05-01', '2024-05-02'),
('b9e279f0-bfee-4450-bd20-b8df26381e3f', '83f9c939-0e8f-43b9-a85a-349029a33831', '153fae9d-cfcf-49b5-b600-0d43d6b16806', '2024-05-29', '2024-05-31');

-- --------------------------------------------------------

--
-- Structure de la table `td_user`
--

CREATE TABLE `td_user` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `role` varchar(255) DEFAULT 'user',
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `td_user`
--

INSERT INTO `td_user` (`id`, `name`, `last_name`, `country`, `email`, `phone`, `role`, `password`) VALUES
('36e2dab3-1d66-4205-899e-f2cecc56d7ab', 'sss', 'sss', 'es', 'sss@ss.ss', 121212121, 'user', '$2b$10$.Hap4/DZZbZh0wZAokGadeGAqOFl1OmJ7zf00lXhgYXBDRkvl8jh.'),
('4720b8d3-cda9-4bfe-853d-7ce1d7bc4bb7', 'Pelo', 'adminduLyon', 'Lyon', 'pelo@pelo.pelo', 69696969, 'admin', '$2b$10$2zelSYM7TPRntUVY.LyTrOQCOSg8M5ymIBoaaPd5FQGGyihabaS2u'),
('4fe35762-4ac8-435c-9e92-fb01dff4e1a5', 'asasas', 'asasas', 'es', 'asasasa@asasas.com', 111112223, NULL, '$2b$10$Yipo54q7sum1dW3L1T.RVucnelLJ.gp3D15Pww0n/77qSbInBBtjC'),
('6324ee1b-7fac-44ec-ac37-b16e14f310c7', 'xxx', 'xxx', 'x', 'xxx@gmail.com', 11111222, 'user', '$2b$10$HxEiPzLwd3T9Rfxt0M5br.lNrCcq4gUEavOr1ueg3vljbD/bGK.we'),
('83f9c939-0e8f-43b9-a85a-349029a33831', 'Macron', 'Du bled', 'Kazahistan', 'macron@macron.macron', 6142356, 'user', '$2b$10$5oBShRbXCTIVH7zuqQZ/leZ1j7YNZ.KGEb55x9wAYtEcRgkYAyhHq'),
('84b8acc6-23d0-452e-aa6a-358e6c3341e3', 'Pelo', 'ricardo', 'Mongolia', 'aaa@aaa.com', 666444, 'admin', '$2b$10$pza7kAGOZOrGvDymBTj9E.wFadd7yYEOXmfbLnncd4VWFowQCTLPi'),
('8f9f9321-3a5f-4d4d-8866-d5bce4e7ee30', 'pelo', 'dulyoon', 'lyonnnneeeee', 'pelodu@lyon.com', 111122233, 'user', '$2b$10$Orbc7Thgb5u33qVI.lVpi.RILpo.JXRpb6ZU1ib/CMSjTddCczGn6'),
('b913b540-54f3-4c0a-bcf7-c58e5818a37f', 'zzzzzz', 'zzzzzz', 'zzzz', 'zzzz@zzz.zz', 1234567, 'user', '$2b$10$49.x0wcV4MnHlS9.6/GxPODrBRmVGlpsleWlIE2k53KzF3pH4NYtm'),
('be6ce5c5-a379-4224-b760-472dafdb637a', 'zzzz', 'zzzz', 'z', 'zzzz@zzz.com', 111333222, 'user', '$2b$10$w6Y0pCEyvtBig8ywBDeSHeS2yUMXLpFliGT8XWNtJmAotdc9dZcwm');

-- --------------------------------------------------------

--
-- Structure de la table `td_vehicle`
--

CREATE TABLE `td_vehicle` (
  `id` varchar(36) NOT NULL,
  `model_id` varchar(36) DEFAULT NULL,
  `plate` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `td_category`
--
ALTER TABLE `td_category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `td_model`
--
ALTER TABLE `td_model`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `td_rent`
--
ALTER TABLE `td_rent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `vehicle_id` (`vehicle_id`);

--
-- Index pour la table `td_user`
--
ALTER TABLE `td_user`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `td_vehicle`
--
ALTER TABLE `td_vehicle`
  ADD PRIMARY KEY (`id`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `td_rent`
--
ALTER TABLE `td_rent`
  ADD CONSTRAINT `td_rent_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `td_user` (`id`),
  ADD CONSTRAINT `td_rent_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `td_model` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
