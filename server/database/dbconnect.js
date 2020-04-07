
const { Pool } = require("pg");

const pool = new Pool({
    user: "sound_cloud",
    host: "localhost",
    database: "sound_cloud",
    password: "password",
    port: 5432,
  });

pool.connect();

module.exports = pool;