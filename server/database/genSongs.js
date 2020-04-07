const faker = require("faker");
const fs = require("fs");
const csvWritter = require("csv-write-stream");
const writer = csvWritter();

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

let songId = 0;
// write songs to csv
const dataGen = () => {
  writer.pipe(fs.createWriteStream("songs.csv"));
  for (var i = 0; i < 100; i++) {
    writer.write({
      song_name: faker.lorem.words(),
      song_url: songUrl[songId],
    });
    if (songId === songUrl.length - 1) {
      songId = 0;
    } else {
      songId++;
    }
  }
  writer.end();
  console.log("wrote data!");
};

dataGen();

