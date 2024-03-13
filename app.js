const express = require("express");
const sequelize = require("./models/sequelize");
const Livre = require("./models/Livre");
const cors = require("cors");
const {
  getBooks,
  getBook,
  deleteBook,
  addBook,
  updateBook,
} = require("./controllers/livre.controller");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

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

//récupération des livres
app.get("/livres", getBooks);

//récupération d'un livre
app.get("/livres/:id", getBook);

//suppression d'un livre
app.delete("/livres/:id", deleteBook);

//ajout d'un livre
app.post("/livres", addBook);

//modification d'un livre
app.put("/livres/:id", updateBook);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
