const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db");
const port = 3005;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("It is working");
});

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
