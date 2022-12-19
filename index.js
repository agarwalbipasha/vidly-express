const express = require("express");
const app = express();
const url = "http://m.vid.ly/api/ ";
const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const result = fetch(url)
    .then((data) => JSON.stringify(data))
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
  //   res.send(result);
});

app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
