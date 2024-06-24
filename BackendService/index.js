require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const router = require("./src/routes/ticketRoutes");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);
app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Service is working on ${process.env.PORT} port.`);
});
