import express from "express";
import privateRoute from "../MiddleWears/Authentication.js";
import { getIndividualPlayList } from "../MiddleWears/IndividualPlayList.js";
import Notes from "../Models/NotesModel.js";
import Playlist from "../Models/PlayListModel.js";
import { getIndividualNotes } from "../MiddleWears/IndividualNote.js";
import pkg from "lodash";
const { extend } = pkg;

const router = express.Router();
router.param("playlistID", getIndividualPlayList);
router.param("notesID", getIndividualNotes);

// post
// privare route
// new note
router.post("/:playlistID/:videoID", privateRoute, async (req, res) => {
  const { title, description } = req.body;
  const { playlistID } = req.params;
  const { videoID } = req.params;
    let individualPlaylist = req.individualPlaylist;
    
  

  const newNote = new Notes({
    user: req.user.id,
    playlistID: playlistID,
    videoID: videoID,
    title: title,
    description: description,
  });
  const saveNewNote = await newNote.save();
  const indiVIdeo = individualPlaylist.videos.filter(
    (ele) => JSON.stringify(ele.videoID) == JSON.stringify(videoID)
  );

  indiVIdeo[0].notes.push({ notesID: saveNewNote._id });
  await individualPlaylist.save({ suppressWarning: true });

  const allPlaylist = await Playlist.find({ user: req.user.id })
    .populate("videos.videoID")
    .populate("videos.notes.notesID");
  return res.status(200).json(allPlaylist);
});

// update
// private route
// update notes
router.post("/:notesID", privateRoute, async (req, res) => {
  const { individualNote } = req;
  let updatedNoteNote = req.body;
  updatedNoteNote = extend(individualNote, updatedNoteNote);
  await updatedNoteNote.save();
  const allPlaylist = await Playlist.find({ user: req.user.id })
    .populate("videos.videoID")
    .populate("videos.notes.notesID");
  return res.status(200).json(allPlaylist);
});

export default router;

router.delete(
  "/:playlistID/:videoID/:notesID",
  privateRoute,
  async (req, res) => {
    const { notesID } = req.params;
    const { videoID } = req.params;

    let individualPlaylist = req.individualPlaylist;
    await Notes.findByIdAndDelete(notesID);
    let indiVIdeo = individualPlaylist.videos.filter(
      (ele) => JSON.stringify(ele.videoID) == JSON.stringify(videoID)
    );
    // console.log(indiVIdeo[0]);

    // indiVIdeo[0]= indiVIdeo[0].notes.filter(
    //   (ele) => JSON.stringify(ele.notesID) !== JSON.stringify(notesID)
    //   );
      
   
      indiVIdeo[0].notes=indiVIdeo[0].notes.filter( (ele) => JSON.stringify(ele.notesID) !== JSON.stringify(notesID))
    await individualPlaylist.save();
    const allPlaylist = await Playlist.find({ user: req.user.id })
      .populate("videos.videoID")
      .populate("videos.notes.notesID");
    return res.status(200).json(allPlaylist);
  }
);
