const express = require("express");
const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.json({
    time: new Date(),
    environemnt: "ycombinator",
    version: "100",
  });
});

app.get("/log", (req, res) => {
  const { text } = req.query;
  if (text) {
    console.log(text);
    console.log("new line:\n" + text);
  }
  res.json({ text, date: new Date() });
});

app.get("/json", (req, res) => {
  res.json({ now: new Date() });
});

app.get("/crash", (req, res) => {
  setTimeout(function () {
    throw new Error("an error occurred, so node crashed");
  }, 10);
  res.json({ message: "crashing soon", date: new Date() });
});

app.get("/env", (req, res) => {
  res.json({ env: process.env, testing: process.env.TESTING });
});

app.listen(port, () => {
  console.log(`Dummy server listening on port ${port}`);
});
