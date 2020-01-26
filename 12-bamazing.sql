DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE bamazon (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price_retail DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key (item_id)
);

SELECT * FROM bamazon

INSERT INTO bamazon (product_name, department_name, price_retail, stock_quantity)
  VALUES
    ('socks', 'clothing', 10, 30),
    ('jeans', 'clothing', 25, 10),
    ('vans', 'shoes', 75, 10),
    ('jiffy-mix', 'dry-goods', 1, 100),
    ('t-bone_steak', 'butcher', 20, 5),
    ('t-shirt', 'clothing', 5, 100),
    ('macbook', 'electronics', 2800, 10),
    ('apple', 'produce', 1, 200),
    ('xbox', 'electronics', 350, 1),
    ('bananas', 'produce', 1, 500)

