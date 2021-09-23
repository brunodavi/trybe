CREATE DATABASE IF NOT EXISTS albuns;

CREATE TABLE artist (
    artist_id INT PRIMARY KEY AUTO_INCREMENT,
    artist_name VARCHAR(50)
);

CREATE TABLE style (
    style_id INT PRIMARY KEY AUTO_INCREMENT,
    style_name VARCHAR(50)
);

CREATE TABLE album (
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    preco DECIMAL(5 , 2 ) NOT NULL,
    artist_id INT NOT NULL,
    style_id INT NOT NULL,
    FOREIGN KEY (artist_id)
        REFERENCES artist (artist_id),
    FOREIGN KEY (style_id)
        REFERENCES style (style_id)
);
