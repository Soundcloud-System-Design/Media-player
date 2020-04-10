const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const pool = require("./database/dbconnect.js");
const query = require("./database/queries.js");

const app = express();

app.use(express.static("../client/dist"));
app.use(cors());

app.get("/songs", (req, res) => {
  pool.query(
    "SELECT * FROM songs, artists, albums, songs_artist_album WHERE songs_artist_album.song_id = songs.id AND songs_artist_album.album_id = albums.id AND songs_artist_album.artists_id = artists.id",
    (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log(result);
        return res.json({
          data: result,
        });
      }
    }
  );
  // res.send('worked')
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
