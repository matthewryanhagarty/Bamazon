DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (

item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NULL,
department_name VARCHAR(50) NULL,
price INTEGER NULL,
stock_quantity INTEGER NULL,
PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Locus Pocus", "Vinyl", 10, 50), ("Fritz Montana", "Vinyl", 15, 50), ("Fleetwood Mac", "Vinyl", 65, 1), ("White Denim", "Vinyl", 25, 20),
("Big Brother & The Holding Company", "Vinyl", 20, 15), ("Stepphenwolf's Greatest Hits", "Vinyl", 10, 20),
("The Story So Far", "Vinyl", 10, 25), ("The Rolling Stones", "Vinyl", 75, 100), ("RHYE", "Cassette Tape", 30, 40), 
("Andy Bender", "Cassette Tape", 25, 3), ("Sports", "Cassette Tape", 15, 5),
("Toro y Moi", "Cassette Tape", 25, 10), ("Slothrust", "CD", 17, 30), ("The Dip", "CD", 10, 10),
("Field Medic", "CD", 20, 5), ("Fidlar", "CD", 10, 100), ("Kurt Vile", "CD", 45, 1), 
("Cool Ghouls", "CD", 20, 75), ("Chaz Bundick Meets The Mattson 2", "Digital Download", 5, 100),
("*repeat repeat", "Digital Download", 17, 100), ("The American Scene", "Digital Download", 10, 100),
("Japanese Breakfast", "Digital Download", 15, 100);