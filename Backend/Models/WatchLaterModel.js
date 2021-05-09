import mongoose from "mongoose";

const watchedSchema = mongoose.Schema(
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

const Watched = mongoose.model("Watched", watchedSchema);
export default Watched;
