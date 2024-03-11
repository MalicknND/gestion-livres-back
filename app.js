const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello World!",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
