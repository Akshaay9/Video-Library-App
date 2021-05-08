import express, { json } from "express";
import privateRoute from "../MiddleWears/Authentication.js";
import { getIndividualPlayList } from "../MiddleWears/IndividualPlayList.js";
import Playlist from "../Models/PlayListModel.js";
import Videos from "../Models/VideoModel.js"
const router = express.Router();

router.param("playlistID", getIndividualPlayList);
// get
// private
// get all playslit
router.get("/", privateRoute, async (req, res) => {
  const allPlaylist= await Playlist.find({ user: req.user.id }).populate('videos.videoID')
  return res.status(200).json(allPlaylist)
})
// DELETE
// private
// DELETE entrie playlist
router.delete("/:playlistID", privateRoute, async (req, res) => {
  const {playlistID}=req.params
  await Playlist.findByIdAndDelete(playlistID)
  const allPlaylist= await Playlist.find({ user: req.user.id }).populate('videos.videoID')
  return res.status(200).json(allPlaylist)
})

// post
// private
// post new playlist
router.post("/new/:videoID", privateRoute, async (req, res) => {
  const { videoID } = req.params;
  const { name } = req.body;
  const isPlayListAlredyPresent = await Playlist.find({
    user: req.user.id,
    name: name,
  });
  if (isPlayListAlredyPresent.length !== 0) {
    return res.status(200).json({ error: "playlist alredy exist" });
  }
  const newPlaylist = new Playlist({
    user: req.user.id,
    name: name,
  });

  newPlaylist.videos.push({
    videoID: videoID,
    notes: [],
  });

  await newPlaylist.save();
 const allPlaylist= await Playlist.find({ user: req.user.id }).populate("videos.videoID");
 return res.status(200).json(allPlaylist)
});

// post
// private
// post videos in to playlist

router.post("/:playlistID/:videoID", privateRoute, async (req, res) => {
  const individualPlaylist = req.individualPlaylist;
  const { videoID } = req.params;
  const isVideoAlredyPlayListed = individualPlaylist.videos.filter(
    (ele) => JSON.stringify(ele.videoID) == JSON.stringify(videoID)
  );
  if (isVideoAlredyPlayListed.length !== 0) {
    return res.status(400).json({ error: "video alredy playlisted" });
  }
  individualPlaylist.videos.unshift({
    videoID: videoID,
  });
  await individualPlaylist.save();
  const allPlaylist= await Playlist.find({ user: req.user.id }).populate('videos.videoID')
  return res.status(200).json(allPlaylist)
});
// delete
// private
// delete video from playlist
router.delete("/:playlistID/:videoID", privateRoute, async (req, res) => {
  let individualPlaylist = req.individualPlaylist;
  const { videoID } = req.params;
  individualPlaylist.videos = individualPlaylist.videos.filter(
    (ele) => JSON.stringify(ele.videoID) !== JSON.stringify(videoID)
  );
  console.log(individualPlaylist.videos);

  await individualPlaylist.save();
  const allPlaylist= await Playlist.find({ user: req.user.id }).populate('videos.videoID')
  return res.status(200).json(allPlaylist)
});

export default router;
