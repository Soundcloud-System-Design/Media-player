const pool = require("./dbconnect.js");

const getAllSongs = (req, res) => {
   pool.query("SELECT * FROM song_artist_album", (err, result) => {
    if (err) {
      throw err;
    } else {
        console.log(result)
      res.json(result);
    }
  });
};

const getSong = (req, res) => {
  return pool.query(
    `SELECT * FROM song_artist_album WHERE id = '${randomId}`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json(result);
      }
    }
  );
};

module.exports = getAllSongs;
module.exports = getSong;
