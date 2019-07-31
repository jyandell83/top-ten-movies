const express = require("express")
const router = express.Router()
const commentController = require("../controllers/commentController")

// router.get("/", movieController.movieMain);


// router.get("/new", movieController.newMovie)

router.post("/", commentController.postComment)

// router.get("/:id", movieController.showMovie)

// router.delete("/:id", movieController.deleteMovie)

// router.get("/:id/edit", movieController.editMovie)

// router.put("/:id", movieController.updateMovie)

module.exports = router