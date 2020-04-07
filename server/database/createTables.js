const Pool = require("pg").Pool;

const pool = new Pool({
  user: "sound_cloud",
  host: "localhost",
  database: "sound_cloud",
  password: "password",
  port: 5432,
});

const randomId = Math.floor(Math.random() * Math.floor(50));

const getAllSongs = (req, res) => {
  pool.query("SELECT * FROM song_artist_album", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.json(result);
    }
  });
};

const getSong = (req, res) => {
  pool.query(
    `SELECT * FROM song_artist_album WHERE id = '${randomId}`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json(result);
      }
    }
  );
};

pool.query(
  `CREATE TABLE IF NOT EXISTS songs (
  id SERIAL PRIMARY KEY,
  song_name varchar (150),
  song_url varchar (150)
)`,
  (err, res) => {
    if (err) {
      throw err;
    }
    pool.query(
      `CREATE TABLE IF NOT EXISTS albums (
    id SERIAL PRIMARY KEY,
    album_name varchar(150),
    album_url varchar(150)
  )`,
      (err, res) => {
        if (err) {
          throw err;
        }
        pool.query(
          `CREATE TABLE IF NOT EXISTS artists (
      id SERIAL PRIMARY KEY,
      artist_name varchar(150)
    )`,
          (err, res) => {
            if (err) {
              throw err;
            }
            pool.query(`CREATE TABLE IF NOT EXISTS songs_artist_album (
        id SERIAL PRIMARY KEY,
        song_id INT REFERENCES songs(id),
        album_id INT REFERENCES albums(id),
        artists_id INT REFERENCES artists(id)
      )`);
          }
        );
      }
    );
  }
);

// // seed the DB with 10mil records
const songUrl = [
  "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/Business+Men(3).wav",
  "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/River+Road+bounce+1.mp3",
  "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/The+News+(Final).wav",
  "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/amanda(cut2).wav",
  "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/bensound-dubstep.mp3",
  "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/bensound-epic.mp3",
  "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/bensound-happyrock.mp3",
  "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/bensound-highoctane.mp3",
  "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/bensound-punky.mp3",
  "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/bensound-rumble.mp3",
  "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/download.png",
];

pool.query(
  `COPY songs (song_name, song_url) FROM '/Users/jakeknudsen/Documents/SDC/Media-player/server/database/songs.csv' DELIMITER ',' CSV HEADER`,
  (err, res) => {
    if (err) {
      throw err;
    }
    console.log("songs added to DB");
    pool.query(
      `COPY artists (artist_name) FROM '/Users/jakeknudsen/Documents/SDC/Media-player/server/database/artists.csv' DELIMITER ',' CSV HEADER`,
      (err, res) => {
        if (err) {
          throw err;
        }
        console.log("copied artist");
        pool.query(
          `COPY albums (album_name, album_url) FROM '/Users/jakeknudsen/Documents/SDC/Media-player/server/database/albums.csv' DELIMITER ',' CSV HEADER`,
          (err, res) => {
            if (err) {
              throw err;
            }
            console.log("copied albums");
          }
        );
      }
    );
  }
);


