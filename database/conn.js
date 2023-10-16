const mongoose = require("mongoose");

// database connect
async function connect() {
  const db = await mongoose.connect("mongodb://127.0.0.1:27017/Products");
  return db;
  // .then(() => {
  //   console.log("Database Connection Successful! ");
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
}

module.exports = connect;
