const express = require("express");
const app = express();

const { router } = require("./my-router");
app.use("/api", router);

app.listen(8081, (err) => {
  if (err) {
    console.log("Error");
  }
  console.log("Example app listening on port 8081!");
});
