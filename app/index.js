const express = require("express");
const app = express();
const port = 3002;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.json({
    time: new Date(),
    environemnt: "main3",
    note: "testing pr merging",
  });
});

app.get("/json", (req, res) => {
  res.json({ now: new Date() });
});

app.get("/slow", async (req, res) => {
  const started = new Date();
  await sleep(1000 * randomInt(1, 10));
  res.json({ started, ended: new Date() });
});

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

app.get("/log", (req, res) => {
  const { text } = req.query;
  if (text) {
    console.log(text);
    console.log("new line:\n" + text);
  }
  res.json({ text, date: new Date() });
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
