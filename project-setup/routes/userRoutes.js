const express = require("express");
const router = express.Router();
const { getUser, createUser, getUserById, updateUser, deleteUser } = require("../controllers/userController");

/**
 * @openapi
 * /users:
 *   get:
 *     summary: List users
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/", getUser);
router.post("/create", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
