DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE stock (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department VARCHAR(30) NOT NULL,
price DECIMAL(10,2) NOT NULL,
in_stock INT NULL,
PRIMARY KEY (id)
);

  INSERT INTO stock
    (product_name, department, price, in_stock)
  VALUES
    ('socks', 'clothing', 10, 30);

  INSERT INTO stock
    (product_name, department, price, in_stock)
  VALUES
    ('jeans', 'clothing', 25, 10);

  INSERT INTO stock
    (product_name, department, price, in_stock)
  VALUES
    ('vans', 'shoes', 75, 10);

  INSERT INTO stock
    (product_name, department, price, in_stock)
  VALUES
    ('jiffy-mix', 'dry-goods', 1, 100);

  INSERT INTO stock
    (product_name, department, price, in_stock)
  VALUES
    ('t-bone_steak', 'butcher', 20, 5);

  INSERT INTO stock
    (product_name, department, price, in_stock)
  VALUES
    ('t-shirt', 'clothing', 5, 100);

  INSERT INTO stock
    (product_name, department, price, in_stock)
  VALUES
    ('macbook', 'electronics', 2800, 10);

  INSERT INTO stock
    (product_name, department, price, in_stock)
  VALUES
    ('apple', 'produce', 1, 200);

  INSERT INTO stock
    (product_name, department, price, in_stock)
  VALUES
    ('xbox', 'electronics', 350, 1);

  INSERT INTO stock
    (product_name, department, price, in_stock)
  VALUES
    ('bananas', 'produce', 1, 500);

INSERT INTO stock
	(product_name, department, price, in_stock)
VALUES
	('socks', 'clothing', 10, 30)
