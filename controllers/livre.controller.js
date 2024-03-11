const Livre = require("../models/Livre");

// récupération des livres
const getBooks = async (req, res) => {
  try {
    const livres = await Livre.findAll();

    res.status(200).json(livres);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// récupération d'un livre
const getBook = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    res.status(200).json(livre);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

// ajout d'un livre

const addBook = async (req, res) => {
  try {
    const livre = await Livre.create(req.body);
    res.status(201).json(livre);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

// modifier un livre

const updateBook = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    livre.update(req.body);
    res.status(200).json(livre);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

// suppression d'un livre

const deleteBook = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    livre.destroy();
    res.status(200).json(livre);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

module.exports = { getBooks, getBook, addBook, deleteBook, updateBook };
