CREATE DATABASE IF NOT EXISTS chat;

USE chat;

/* Describe your table here.*/

-- -----------------------------------------------------
-- Table `chat`.`usernames`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chat`.`usernames` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `username` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chat`.`roomnames`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chat`.`roomnames` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `roomname` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chat`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS messages (
  `idmessages` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `messagescol` VARCHAR(140) NOT NULL COMMENT '',
  `timestamp` TIMESTAMP(6) NOT NULL COMMENT '',
  `usernames_id` INT NOT NULL COMMENT '',
  `roomnames_id` INT NOT NULL COMMENT '',
  PRIMARY KEY (`idmessages`)  COMMENT '',
  INDEX `fk_message_usernames1_idx` (`usernames_id` ASC)  COMMENT '',
  INDEX `fk_message_roomnames1_idx` (`roomnames_id` ASC)  COMMENT '',
  CONSTRAINT `fk_message_usernames1`
    FOREIGN KEY (`usernames_id`)
    REFERENCES `chat`.`usernames` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_message_roomnames1`
    FOREIGN KEY (`roomnames_id`)
    REFERENCES `chat`.`roomnames` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chat`.`usernames_has_roomnames`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chat`.`usernames_has_roomnames` (
  `usernames_id` INT NOT NULL COMMENT '',
  `roomnames_id` INT NOT NULL COMMENT '',
  PRIMARY KEY (`usernames_id`, `roomnames_id`)  COMMENT '',
  INDEX `fk_usernames_has_roomnames_roomnames1_idx` (`roomnames_id` ASC)  COMMENT '',
  INDEX `fk_usernames_has_roomnames_usernames_idx` (`usernames_id` ASC)  COMMENT '',
  CONSTRAINT `fk_usernames_has_roomnames_usernames`
    FOREIGN KEY (`usernames_id`)
    REFERENCES `chat`.`usernames` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usernames_has_roomnames_roomnames1`
    FOREIGN KEY (`roomnames_id`)
    REFERENCES `chat`.`roomnames` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


/* Create other tables and define schemas for them here! */

-- MySQL Script generated by MySQL Workbench
-- Fri Jul 24 15:10:54 2015
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

-- SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
-- SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
-- SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';





-- SET SQL_MODE=@OLD_SQL_MODE;
-- SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
-- SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

