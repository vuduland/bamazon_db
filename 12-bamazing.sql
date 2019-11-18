DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE bamazon_db (
  id INT NOT NULL AUTO_INCREMENT,
  produce_name VARCHAR(30) NOT NULL,
  department VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  in_stock INT NULL
  PRIMARY KEY (id)
);



INSERT INTO bamazon_db ()
VALUES ();

INSERT INTO bamazon_db ()
VALUES ();

INSERT INTO bamazon_db ()
VALUES ();
