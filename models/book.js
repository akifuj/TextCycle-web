import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publisher: String,
  image: String
})

const Book = mongoose.model('Book', BookSchema)

// モデルをexport
export default Book
