const exec = require("child_process").exec;
const command =
  "mongoimport --type json -d sound_cloud -c songs --drop mongoData.json";

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(err, "error importing");
  }
});