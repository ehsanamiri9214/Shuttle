import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
    required: true,
  },
  refreshToken: {
    type: String,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Token", tokenSchema);
