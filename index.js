const express = require("express");
const cors = require("cors");

const router = require("./router/route");

const connect = require("./database/conn");
const app = express();

// cors for handle origin problem
app.use(cors());

// middleware
app.use(express.json());

// GET Request
app.get("/", (req, res) => {
  res.status(200).send("Home GET Request!");
});

// server run port
const port = 8080;

// api route
app.use("/api", router);

// server connection
connect().then(() => {
  try {
    app.listen(port),
      () => {
        console.log(`Server Connected to http://localhost:${port}`);
      };
  } catch (error) {
    console.log("Cannot Connect to Server!");
  }
});
