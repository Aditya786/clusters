const cluster = require("cluster");
const express = require("express");
const os = require("os");

const app = express();

if (cluster.isPrimary) {
  for (let i = 0; i <= os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  app.listen("9000", () => {
    console.log("Servier is running on PORT 9000");
  });
  app.get("/", (req, res) => {
    res.json({ hi: `Running ${process.pid}` });
  });
}
