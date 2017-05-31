import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  username: String,
  phoneNumber: String,
  major: Number,
  degree: Number,
  year: Number,
  sex: Number,
  introduction: String
});

const user = mongoose.model('user', UserSchema);
export default user;
