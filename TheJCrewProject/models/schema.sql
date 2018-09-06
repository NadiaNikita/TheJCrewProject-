DROP DATABASE IF EXISTS bottlesowine;
create database bottlesowine;

use bottlesowine;

CREATE TABLE `foods` (
  id int(11) NOT NULL AUTO_INCREMENT,
  food_id int(11) DEFAULT NULL,
  food_name varchar(255) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

use bottlesowine;


CREATE TABLE wines(
  id int(11) NOT NULL AUTO_INCREMENT,
  wine_id int(11) DEFAULT NULL,
  wine_class varchar(255) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;


use bottlesowine;

CREATE TABLE `wnames` (
  id int(11) NOT NULL AUTO_INCREMENT,
  wine_id int(11) DEFAULT NULL,
  wine_name varchar(255) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

use bottlesowine;

CREATE TABLE pairings(
  id int(11) NOT NULL AUTO_INCREMENT,
  wine_id int(11) DEFAULT NULL,
  food_id int(11) DEFAULT NULL,
  food_name varchar(255) DEFAULT NULL,
  wine_name varchar(255) DEFAULT NULL,
  wine_bottle varchar(255) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

