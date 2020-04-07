const faker = require("faker");
const fs = require("fs");
const csvWritter = require("csv-write-stream");
const writer = csvWritter();

// write albums to csv
const artistGen = () => {
  writer.pipe(fs.createWriteStream("artists.csv"));
  for (var i = 0; i < 6000000; i++) {
    writer.write({
      artist_name: faker.lorem.words(),
    });
  }
  writer.end();
  console.log("wrote artists!");
};

artistGen();
