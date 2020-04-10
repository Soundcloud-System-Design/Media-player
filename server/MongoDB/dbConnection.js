const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/sound_cloud";

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db.then((db) => console.log(`Connected to: ${mongoURI}`)).catch((err) => {
  console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
  console.log(err);
});

module.exports = db;

const musicSchema = new mongoose.Schema({
  playlist_name: String,
  allSongsWithInfos: [
    {
      song_name: String,
      song_url: String,
      band_name: String,
      album_image: String,
      music_genre: String,
      release_date: String,
    },
  ],
});

const Music = mongoose.model("Music", musicSchema);

module.exports = Music;
