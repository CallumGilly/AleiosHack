-- MySQL Script generated by MySQL Workbench
-- Sat Feb 11 18:24:33 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Hack
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Hack
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Hack` DEFAULT CHARACTER SET utf8 ;
USE `Hack` ;

-- -----------------------------------------------------
-- Table `Hack`.`reports`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Hack`.`reports` ;

CREATE TABLE IF NOT EXISTS `Hack`.`reports` (
  `reportID` INT NOT NULL AUTO_INCREMENT,
  `Longitude` DECIMAL(8,6) NOT NULL,
  `Latitude` DECIMAL(8,6) NOT NULL,
  `Image` MEDIUMBLOB NULL,
  `Time` TIMESTAMP NOT NULL,
  `Catagory` VARCHAR(45) NULL,
  `Description` VARCHAR(255) NULL,
  PRIMARY KEY (`reportID`),
  UNIQUE INDEX `reportID_UNIQUE` (`reportID` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
