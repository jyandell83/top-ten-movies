const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

// router.get("/", movieController.movieMain);


router.get("/registration", userController.newUser)

// router.post("/", movieController.postMovie)

// router.get("/:id", movieController.showMovie)

// router.delete("/:id", movieController.deleteMovie)

// router.get("/:id/edit", movieController.editMovie)

// router.put("/:id", movieController.updateMovie)

module.exports = router