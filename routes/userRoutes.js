const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.get("/", userController.userIndex);

router.get("/registration", userController.newUser)

router.post("/", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/logout", userController.logOutUser)

router.get("/:id", userController.showUser)

router.delete("/:id", userController.deleteUser)

router.get("/:id/edit", userController.editUser)

router.put("/:id", userController.updateTopTen)

module.exports = router