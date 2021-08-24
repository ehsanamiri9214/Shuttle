import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: false,
  },
});

export default mongoose.model("User", userSchema);
