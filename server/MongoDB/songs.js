const Music = require("./dbConnection");

exports.getOne = (req, res) => {
  Music.find({}, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
};
