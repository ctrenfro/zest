const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const path = require("path");

const app = express();
const port = 5000;

app.use(cors());

app.use(express.static(path.join(__dirname + "/public")));

app.get("/recipes/:query/:to", async (req, res) => {
  const response = await axios.get(
    `https://api.edamam.com/search?q=${req.params.query}&to=${req.params.to}&app_id=${process.env.ID_KEY}&app_key=${process.env.API_KEY}`
  );
  console.log(response.data);
  res.json(response.data);
});

app.get("/recipes/:query", async (req, res) => {
  const response = await axios.get(
    `https://api.edamam.com/search?q=${req.params.query}&app_id=${process.env.ID_KEY}&app_key=${process.env.API_KEY}`
  );
  console.log(response.data);
  res.json(response.data);
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
