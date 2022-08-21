const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myweb")
  .then(() => {
    console.log(" data base coonetcion is done ");
  })
  .catch((e) => {
    console.log(` you data base connection is not done du to ${e}`);
  });
