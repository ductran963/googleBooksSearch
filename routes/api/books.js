const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
// Using this allows us to update and received users info
router
  .route("/:id")
  .delete(booksController.remove);

// Matches with "/api/books/google/:input"
router.route("/google/:input")
  .get(booksController.getGoogleBooks);

module.exports = router;