const mongoose = require("mongoose");
const homebannerschema = new mongoose.Schema({
  Heading: {
    type: String,
    required: true,
    unique: true,
  },
  prea: {
    type: String,
    required: true,
    unique: true,
  },
});

const homebanner = new mongoose.model("homebanner", homebannerschema);
module.exports = homebanner;
