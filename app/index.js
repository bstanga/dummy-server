const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const port = 3000;

const prisma = new PrismaClient();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", async (req, res) => {
  const messages = await prisma.message.findMany();

  res.json({
    time: new Date(),
    messages,
  });
});

app.get("/message", async (req, res) => {
  const { text } = req.query;

  const message = await prisma.message.create({
    data: {
      text,
    },
  });

  res.json({ success: true, newMessage: message });
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
