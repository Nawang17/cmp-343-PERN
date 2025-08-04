const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const { getLinks, addLink, deleteLink } = require("./queries");
const app = express();
const port = 3000;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.json({ info: "Node.js, Express, and Postgres API" })
);
app.get("/links", getLinks);
app.post("/links", addLink);
app.delete("/links/:id", deleteLink);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
