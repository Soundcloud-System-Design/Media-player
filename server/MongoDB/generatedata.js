const fs = require("fs");
const faker = require("faker");
const path = require("path");

let generateSongs = fs.createWriteStream(
  path.join(__dirname, "./mongoData.json")
);

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

const tenMillionSongs = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 1;
  write();
  function write() {
    let ok = true;
    do {
      i -= 1;
      //   const allSongs = [];
      let songName = faker.lorem.words();
      let song_Url =
        songUrl[faker.random.number({ min: 0, max: songUrl.length - 1 })];
      let bandName = faker.lorem.words();
      let albumImage = faker.image.image();
      let musicGenre = "rock";
      let releaseDate = faker.date.past();
      allSongs = {
        songName: songName,
        songUrl: song_Url,
        bandName: bandName,
        albumImage: albumImage,
        musicGenre: musicGenre,
        releaseDate: releaseDate,
      };

      const data = JSON.stringify({
        id: id,
        songs: { allSongs },
      });
      id++;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once("drain", write);
    }
  }
  write();
};

tenMillionSongs(generateSongs, "utf-8", () => {
  generateSongs.end();
});
