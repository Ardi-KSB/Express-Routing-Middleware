const { request } = require("express");
const users = require("../models/user");

module.exports = {
  getAllUser: (req, res) => {
    res.json(users);
  },

  getUserById: (req, res) => {
    const { id } = req.params;

    let findUser = users.find((item) => item.id == id);
    if (findUser) {
      res.json(findUser);
    } else {
      res.json("user not found");
    }
  },

  addUser: (req, res) => {
    let findUser = req.body;

    if (users.find((item) => item.id === user.id)) {
      res.json("user already exist");
    } else if (findUser) {
      users.push(findUser);
      res.json(findUser);
    }
  },

  deleteUser: (req, res) => {
    const { id } = req.params;

    let findUser = users.find((item) => item.id == id);
    if (findUser) {
      users.splice(users.indexOf(findUser), 1);
      res.json("user has been deleted");
    } else {
      res.json("user not found");
    }
  },

  editUser: (req, res) => {
    const { id } = req.params;
    let findUser = users.find((item) => item.id == id);
    if (findUser) {
      let update = {
        id: user.id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      };
      users.splice(users.indexOf(findUser), 1, update);
      res.json("user has been updated");
    }
  },
};
