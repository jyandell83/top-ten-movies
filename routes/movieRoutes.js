const express = require("express")
const router = express.Router()
const movieController = require("../controllers/movieController")

router.get("/", movieController.movieMain);


router.get("/new", movieController.newMovie)

router.post("/", movieController.postMovie)

router.get("/:id", movieController.showMovie)

router.delete("/:id", movieController.deleteMovie)

router.get("/:id/edit", movieController.editMovie)

// router.put("/:id", userController.updateUser)

module.exports = router