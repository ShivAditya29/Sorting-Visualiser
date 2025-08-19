const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "../client")));

const indexHtmlPath = path.join(__dirname, "../index.html");

app.get("/", (req, res) => {
  res.sendFile(indexHtmlPath);
});

app.get("*", (req, res) => {
  res.sendFile(indexHtmlPath);
});

server.listen(PORT);
