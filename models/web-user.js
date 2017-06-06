import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  hashed_password: {type: String, required: true}
});

const user = mongoose.model('web-user', UserSchema);
export default user;
