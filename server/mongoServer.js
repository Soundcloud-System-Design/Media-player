const express = require("express");
const cors = require("cors");
const song = require("./MongoDB/songs");

const app = express();

app.use(express.static("../client/dist"));
app.use(cors());

app.get("/songs", song.getOne);
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
