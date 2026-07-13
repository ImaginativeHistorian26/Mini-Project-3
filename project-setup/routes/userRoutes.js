const express = require("express");
const router = express.Router();
const { getUser, createUser } = require("../controllers/userController");

router.get("/", getUser);
router.post("/create", createUser);
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
