/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/
 DROP DATABASE IF EXISTS workshop;

 CREATE DATABASE workshop;

 use workshop;

 CREATE TABLE groceries (
   id int AUTO_INCREMENT PRIMARY KEY ,
   item varchar(30),
   quantity int
 );