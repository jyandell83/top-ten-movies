const express = require("express")
const router = express.Router()
const movieController = require("../controllers/movieController")

router.get("/", movieController.movieMain);

// router.get("/new", userController.newUsers)

// router.post("/", userController.postUsers)

// router.get("/:id", userController.showUser)

// router.delete("/:id", userController.deleteUser)

// router.get("/:id/edit", userController.editUser)

// router.put("/:id", userController.updateUser)

module.exports = router