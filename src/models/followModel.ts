import mongoose from "mongoose";

const followSchema = new mongoose.Schema(
  {
    sourceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    targetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Follow", followSchema);
