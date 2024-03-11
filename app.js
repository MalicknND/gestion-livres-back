const express = require("express");
const sequelize = require("./models/sequelize");

const app = express();
const port = 5000;

app.use(express.json());

sequelize
  .sync()
  .then(() => {
    console.log("database synchronised");
  })
  .catch((err) => {
    console.error("database synchronisation error :", err);
  });

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello World!",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
