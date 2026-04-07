CREATE TABLE IF NOT EXISTS `artisantable` (
	`Nom` TEXT NOT NULL,
	`specialite` TEXT NOT NULL,
	`note` REAL NOT NULL DEFAULT 0,
	`ville` TEXT NOT NULL,
	`apropos` TEXT NOT NULL,
	`email` TEXT DEFAULT NULL,
	`siteweb` TEXT NOT NULL DEFAULT '0',
	`categorie` TEXT NOT NULL,
	`top` BOOLEAN NOT NULL DEFAULT 0
);
