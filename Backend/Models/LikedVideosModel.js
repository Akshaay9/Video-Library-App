import mongoose from "mongoose";

const likedSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    videoID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Videos",
    },
  },
  {
    timestamps: true,
  }
);

const Liked = mongoose.model("Liked", likedSchema);
export default Liked;
