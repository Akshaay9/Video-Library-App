import mongoose from "mongoose";

const playListSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      requires:true,
    },
    videos: [
      {
        videoID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Videos",
        },
        notes: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Notes",
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Playlist = mongoose.model("playlist", playListSchema)
export default Playlist
