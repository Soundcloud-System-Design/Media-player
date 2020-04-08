const pool = require("./dbconnect.js");
// // seed the DB with 10mil records

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
            pool.query(
              `COPY songs_artist_album (song_id, album_id, artists_id) FROM '/Users/jakeknudsen/Documents/SDC/Media-player/server/database/joinTable.csv' DELIMITER ',' CSV HEADER`,
              (err, res) => {
                if (err) {
                  throw err;
                }
                console.log("DB seeded!");
              }
            );
          }
        );
      }
    );
  }
);
