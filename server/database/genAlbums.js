const faker = require("faker");
const fs = require("fs");
const csvWritter = require("csv-write-stream");
const writer = csvWritter();

// write albums to csv
const albumGen = () => {
  writer.pipe(fs.createWriteStream("albums.csv"));
  for (var i = 0; i < 4000000; i++) {
    writer.write({
      album_name: faker.lorem.words(),
      album_img: faker.image.image(),
    });
  }
  writer.end();
  console.log("wrote albums!");
};

albumGen();