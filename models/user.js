import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  hashed_password: {type: String, required: true},
});

mongoose.Promise = global.Promise;
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost/textcycle';
mongoose.connect(dbUrl, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + dbUrl + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + dbUrl);
  }
});
const user = mongoose.model('user', UserSchema);
export default user;
