// adding database using mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// setting up new schema for database and setting restrictions/validations
const bookSchema = new Schema({
  googleId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  image: String,
  link: String,
  date: { type: Date, default: Date.now }
});
//including id for each so we can use that and delete books according to their id
bookSchema.index({
  googleId: 1,
}, {
    unique: true,
  });
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;