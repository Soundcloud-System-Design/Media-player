const faker = require("faker");
const fs = require("fs");
const csvWritter = require("csv-write-stream");
const writer = csvWritter();

// write albums to csv
const albumGen = () => {
  writer.pipe(fs.createWriteStream("joinTable.csv"));
  for (var i = 0; i < 25; i++) {

    const randomArtist = Math.floor(Math.random() * Math.floor(6000000));
    const randomAlbum = Math.floor(Math.random() * Math.floor(4000000));
    const randomSong = Math.floor(Math.random() * Math.floor(11));

    writer.write({
        song_id: randomSong,
        album_id: randomAlbum,
        artists_id: randomArtist
    });
  }
  writer.end();
  console.log("wrote joinTable!");
};

albumGen();