const express = require("express");
const route = express.Router();
const {
  getAllUser,
  getUserById,
  addUser,
  deleteUser,
  editUser,
} = require("../controllers/userController");
const { mwEditUser, mwDeleteUser } = require("../middleware/middleware");

route.get("/", getAllUser);

route.get("/:username", getUserById);

route.post("/", addUser);

route.delete("/:username", mwDeleteUser, deleteUser);

route.put("/:username", mwEditUser, editUser);

module.exports = route