import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
