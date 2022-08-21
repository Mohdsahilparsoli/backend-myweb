const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
require("./database/database");
const homebanner = require("./models/banner");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("i am working on node js ");
});
/* get all data */
app.get("/homebanner", async (req, res) => {
  try {
    const data = await homebanner.find();
    res.send(data);
  } catch (e) {
    res.status(400).send;
  }
});

/* create api */
app.post("/homebanner", async (req, res) => {
  try {
    const homeb = new homebanner(req.body);
    console.log(homeb);
    const savebannerdata = await homeb.save();
    res.status(200).send(savebannerdata);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(PORT, () => {
  console.log(` i am listening your request at ${PORT} `);
});
