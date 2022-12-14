const express = require("express");
const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.json({
    time: new Date(),
    environemnt: "main",
    note: "deployment by malpe.io",
  });
});

app.get("/json", (req, res) => {
  res.json({ now: new Date() });
});

app.get("/log", (req, res) => {
  const { text } = req.query;
  if (text) {
    console.log(text);
    console.log("new line:\n" + text);
  }
  res.json({ text, date: new Date() });
});

app.listen(port, () => {
  console.log(`Dummy server listening on port ${port}`);
});
