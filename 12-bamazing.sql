DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE bamazon_db (
  id INT NOT NULL AUTO_INCREMENT,
--   price DECIMAL(10,2) NULL,
--   quantity INT NULL,
  PRIMARY KEY (id)
);



INSERT INTO bamazon_db ()
VALUES ("DNA", "Kendrick Lamar", "Rap"); /*VALUES (ident, songName, artistName, genreName); this is if I can make variables and inject them instead of doing data entry*/

INSERT INTO bamazon_db ()
VALUES ("D.A.N.C.E", "JUSTICE", "Dance");

INSERT INTO bamazon_db ()
VALUES ("Crazy Train", "Black Sabbath", "Heavy Metal");
