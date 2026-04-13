-- PALU.SQL - Base de données PNLP complète MySQL/phpMyAdmin
-- Import direct: phpMyAdmin > Import > palu.sql > Exécuter
-- Users: admin@pnlp.ma / password | lab@rabat.ma / password

DROP TABLE IF EXISTS `user_site`;
DROP TABLE IF EXISTS `dhis2_syncs`;
DROP TABLE IF EXISTS `reports`;
DROP TABLE IF EXISTS `ml_models`;
DROP TABLE IF EXISTS `datasets`;
DROP TABLE IF EXISTS `data_captures`;
DROP TABLE IF EXISTS `sentinel_sites`;
DROP TABLE IF EXISTS `roles`;
DROP TABLE IF EXISTS `regions`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `sessions`;
DROP TABLE IF EXISTS `password_reset_tokens`;
DROP TABLE IF EXISTS `jobs`;
DROP TABLE IF EXISTS `cache`;
DROP TABLE IF EXISTS `cache_locks`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `region_id` int(11) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `bio` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_role_id_foreign` (`role_id`),
  KEY `users_region_id_foreign` (`region_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `regions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(10) NOT NULL,
  `description` text,
  `lat` decimal(10, 8) DEFAULT NULL,
  `lng` decimal(11, 8) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `regions_code_unique` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `regions` (`name`, `code`, `description`) VALUES
('Région de Rabat-Salé-Kénitra', 'RSK', 'Nord-Ouest'),
('Région de Casablanca-Settat', 'CS', 'Centre'),
('Région de Fès-Meknès', 'FM', 'Nord-Est'),
('Région de Marrakech-Safi', 'MS', 'Sud'),
('Région de Béni Mellal-Khénifra', 'BMK', 'Centre'),
('Région de Drâa-Tafilalet', 'DT', 'Sud-Est'),
('Région de Guelmim-Oued Noun', 'GON', 'Sud'),
('Région de Laâyoune-Sakia El Hamra', 'LSEH', 'Sahara'),
('Région de Dakhla-Oued Ed-Dahab', 'DED', 'Sahara'),
('Région de Tanger-Tétouan-Al Hoceïma', 'TTAH', 'Nord'),
('Région de l''Oriental', 'OR', 'Est'),
('Région de Souss-Massa', 'SM', 'Sud-Ouest');

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `permissions` longtext,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `roles` (`name`, `permissions`) VALUES
('admin', '{\"*\": true}'),
('laboratoire', '{\"captures.create\": true, \"captures.read\": true}'),
('chercheur', '{\"data.read\": true, \"reports.create\": true}'),
('sentinelle', '{\"sites.manage\": true}');

CREATE TABLE `sentinel_sites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `region_id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL COMMENT 'lab, field, hospital',
  `lat` decimal(10, 8) NOT NULL,
  `lng` decimal(11, 8) NOT NULL,
  `address` text,
  `contact_phone` varchar(20),
  `lab_equipment` text,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sentinel_sites_region_id_foreign` (`region_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `sentinel_sites` (`name`, `region_id`, `type`, `lat`, `lng`, `address`, `contact_phone`, `lab_equipment`) VALUES
('Lab Central Rabat', 1, 'lab', 34.01000000, -6.84000000, 'Rabat Centre', '+212600000001', 'Microscopes, PCR'),
('Site Sentinelle Casablanca', 2, 'field', 33.57000000, -7.58000000, 'Casablanca', '+212600000002', NULL),
('Hopital Fès', 3, 'hospital', 34.04000000, -5.00000000, 'Fès', '+212600000003', NULL);

INSERT INTO `users` (`name`, `email`, `password`, `role_id`, `region_id`, `phone`) VALUES
('Admin PNLP', 'admin@pnlp.ma', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 1, 1, '+212600000000'),
('Lab Tech Rabat', 'lab@rabat.ma', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 2, 1, '+212600000001');

-- Tables supplémentaires essentielles
CREATE TABLE `data_captures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sentinel_site_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `data` longtext NOT NULL,
  `status` varchar(20) DEFAULT 'pending',
  `captured_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `data_captures_sentinel_site_id_foreign` (`sentinel_site_id`),
  KEY `data_captures_user_id_foreign` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `data_captures` (`sentinel_site_id`, `user_id`, `type`, `data`, `status`, `captured_at`) VALUES
(1, 2, 'lab', '{\"sample\":\"microscopy\",\"result\":\"positive\"}', 'pending', NOW());

CREATE TABLE `datasets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `annotations` longtext,
  `status` varchar(20) DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `datasets` (`name`, `description`) VALUES
('Malaria Dataset 2024', 'Données paludisme Maroc 2024');

CREATE TABLE `ml_models` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` varchar(50) NOT NULL,
  `version` varchar(50) NOT NULL,
  `status` varchar(20) DEFAULT 'deployed',
  `metrics` longtext,
  `file_path` varchar(500),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `ml_models` (`name`, `type`, `version`, `metrics`) VALUES
('Malaria Detector', 'visual', 'v1.0', '{\"accuracy\":0.95,\"precision\":0.92}');

CREATE TABLE `reports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) NOT NULL,
  `params` longtext NOT NULL,
  `file_path` varchar(500) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` varchar(20) DEFAULT 'generated',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `reports` (`type`, `params`, `file_path`, `user_id`) VALUES
('pnlp', '{\"region\":\"RSK\"}', '/storage/reports/pnlp_rsk.pdf', 1);

CREATE TABLE `user_site` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `sentinel_site_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_site_user_id_sentinel_site_id_unique` (`user_id`,`sentinel_site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- FIN DU FICHIER - 12 régions, 4 rôles, 3 sites, 2 users, données échantillons prêtes
-- Test: SELECT * FROM users; SELECT COUNT(*) FROM regions;
