const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("hello world from express 2.0");
});

app.listen(port, () => {
  console.log(`Dummy server listening on port ${port}`);
});
