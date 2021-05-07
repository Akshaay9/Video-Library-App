import mongoose from "mongoose";

const notesModel = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  playLists: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Playlist",
  },
  videoID: {
    type: "mongoose.Schema.Types.ObjectId",
    ref: "Videos",
  },

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Notes = mongoose.model("Notes", notesModel)
export default Notes
