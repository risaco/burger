-- Create the database
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create table
CREATE TABLE burgers
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date_stamp TIMESTAMP,
  PRIMARY KEY (id)
);
