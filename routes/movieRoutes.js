const express = require("express")
const router = express.Router()
const movieController = require("../controllers/movieController")

router.get("/", movieController.movieMain);


router.get("/new", movieController.newMovie)

router.post("/", movieController.postMovie)

router.get("/:id", movieController.showMovie)

// router.delete("/:id", userController.deleteUser)

// router.get("/:id/edit", userController.editUser)

// router.put("/:id", userController.updateUser)

module.exports = router