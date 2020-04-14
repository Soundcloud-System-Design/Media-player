const Pool = require("pg").Pool;

const pool = new Pool({
  user: "sound_cloud",
  host: "localhost",
  database: "sound_cloud",
  password: "password",
  port: 5432,
});

pool.query(
  `CREATE TABLE IF NOT EXISTS songs (
  id SERIAL PRIMARY KEY,
  song_name varchar (150),
  music_genre varchar (150),
  release_date varchar(150),
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
    album_image varchar(150)
  )`,
      (err, res) => {
        if (err) {
          throw err;
        }
        pool.query(
          `CREATE TABLE IF NOT EXISTS artists (
      id SERIAL PRIMARY KEY,
      band_name varchar(150)
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
