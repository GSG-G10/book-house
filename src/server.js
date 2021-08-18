require("env2")("config.env");
const express = require("express");
const path = require("path");
const port = process.env.PORT || 4000;
const router = require('./router');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(express.static(path.join(__dirname, "..", "public")));



app.use(router)

//404 middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "public", "404.html"));
});

app.use((err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, "..", "public", "500.html"));
});

app.listen(port, () => {
  console.log(`App running on ${port}`);
});

module.exports = app