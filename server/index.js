const express = require("express");
const cors = require("cors");
const pool = require("./database/dbconnect.js");
const query = require("./database/queries.js");

const app = express();

app.use(express.static("../client/dist"));
app.use(cors());

app.get("/songs/:songId", async (req, res) => {
  const songId = req.params.songId;
  await pool.query(
    `SELECT songs.song_url, songs.song_name, songs.music_genre, songs.release_date, albums.album_image, artists.band_name  FROM songs, artists, albums, songs_artist_album WHERE songs_artist_album.song_id = songs.id AND songs_artist_album.album_id = albums.id AND songs_artist_album.artists_id = artists.id AND songs.id = ${songId}`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        return res.json({
          data: result,
        });
      }
    }
  );
});

//update
app.put("/", (req, res) => {
  res.end();
});

//create
app.post("/", (req, res) => {
  res.end();
});

//delete
app.delete("/", (req, res) => {
  res.end();
});

app.listen(3305, () => {
  console.log("media server listening on 3305");
});

// "SELECT * FROM songs, artists, albums, songs_artist_album WHERE songs_artist_album.song_id = songs.id AND songs_artist_album.album_id = albums.id AND songs_artist_album.artists_id = artists.id"
