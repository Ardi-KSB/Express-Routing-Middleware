const books = require("../models/book");

module.exports = {
  getAllBook: (req, res) => {
    res.json(books);
  },

  getBookById: (req, res) => {
    const { id } = req.params;

    let dataBooks = books.find((item) => item.id == id);
    if (dataBooks) {
      res.json(dataBooks);
    } else {
      res.json("book not found");
    }
  },

  addBook: (req, res) => {
    let add = req.body;

    if (books.find((item) => item.id === add.id)) {
      res.json("book already exist");
    } else if (add) {
      books.push(add);
      res.json(add);
    }
  },

  deleteBook: (req, res) => {
    const { id } = req.params;
    let remove = books.find((item) => item.id == id);
    if (remove) {
      books.splice(books.indexOf(remove), 1);
      res.json("success");
    } else {
      res.json("book not found");
    }
  },

  editBook: (req, res) => {
    const { id } = req.params;
    let edit = books.find((item) => item.id == id);

    if (edit) {
      let editDataBook = { id: edit.id, title: req.body.title, pages: req.body.pages };
      books.splice(books.indexOf(edit), 1, editDataBook);
      res.json("success");
    }
  },
};