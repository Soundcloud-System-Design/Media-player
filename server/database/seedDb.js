const pool = require("./dbconnect.js");
// // seed the DB with 10mil records

// const songUrl = [
//   "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/Business+Men(3).wav",
//   "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/River+Road+bounce+1.mp3",
//   "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/The+News+(Final).wav",
//   "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/amanda(cut2).wav",
//   "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/bensound-dubstep.mp3",
//   "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/bensound-epic.mp3",
//   "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/bensound-happyrock.mp3",
//   "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/bensound-highoctane.mp3",
//   "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/bensound-punky.mp3",
//   "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/bensound-rumble.mp3",
//   "https://soundcloud-mp3.s3-us-west-1.amazonaws.com/download.png",
// ];

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
