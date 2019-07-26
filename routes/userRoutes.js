const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

// router.get("/", movieController.movieMain);


router.get("/registration", userController.newUser)

router.post("/", userController.createUser)

router.get("/:id", userController.showUser)

// router.delete("/:id", movieController.deleteMovie)

router.get("/:id/edit", userController.editUser)

router.put("/:id", userController.updateTopTen)

module.exports = router