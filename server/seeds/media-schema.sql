CREATE DATABASE media;

USE media;

CREATE TABLE songs (

  song_id int NOT NULL AUTO_INCREMENT,
  song_name varchar(100) NOT NULL,
  music_genre varchar(100) NOT NULL,
  band_name varchar(100) NOT NULL,
  album_image varchar(200) NOT NULL,
  song_url varchar(200) NOT NULL,
  release_date varchar(100) NOT NULL,
  PRIMARY KEY (song_id)
);