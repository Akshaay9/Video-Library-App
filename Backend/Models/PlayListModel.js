import mongoose from "mongoose";

const playListSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    videos: [
      {
        videoID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Videos",
        },
        notes: [
          {
            notesID: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Notes",
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Playlist = mongoose.model("playlist", playListSchema);
export default Playlist;
