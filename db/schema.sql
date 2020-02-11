DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger VARCHAR(100) NULL,
  devoured boolean NOT NULL default 0,
  PRIMARY KEY (id)
);

SELECT * FROM burger_db;