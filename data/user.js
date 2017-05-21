import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password_digest: String,
})

const User = mongoose.model('User', UserSchema)

// モデルをexport
export default User
