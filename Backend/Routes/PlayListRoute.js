import express from "express";
import privateRoute from "../MiddleWears/Authentication.js";
import { getIndividualPlayList } from "../MiddleWears/IndividualPlayList.js";
import Playlist from "../Models/PlayListModel.js";
const router = express.Router();

// router.param("playlistID", getIndividualPlayList);

router.post("/new/:videoID", privateRoute, async (req, res) => {
  const { videoID } = req.params;
  const { name } = req.body;
 

  const isPlayListAlredyPresent = await Playlist.find({
    user: req.user.id,
    name: name,
  });
  if (isPlayListAlredyPresent.length!==0) {
    return res.status(200).json({ error: "playlist alredy exist" });
  }
  const newPlaylist = new Playlist({
    user: req.user.id,
    name: name,
  });

  newPlaylist.videos.push({
    videoID: videoID,
    notes:[]
  })

  await newPlaylist.save();
  res.status(200).json(newPlaylist);
});

router.post("/:playlistID/:videoID", privateRoute, async (req, res) => {
  
})

// router
//   .route("/:playlistID?/:videoID?")
//   .get(privateRoute, async (req, res) => {
//     res.json("route recieved");
//   })
//   .post(privateRoute, async (req, res) => {
//     const videoID = req.params;
//     const { individualPlaylist } = req;
//     try {
//       if (!individualPlaylist) {
//         const newPlaylist = new Playlist({
//           user: req.user,
//           videos: [
//             {
//               videoID: videoID,
//             },
//           ],
//         });
//         await newPlaylist.save();
//         return res.status(200).json(newPlaylist);
//       } else if (individualPlaylist.videos.videoID.includes(videoID))
//         return res.status(400).json({ error: "video alredy playlisted" });
//       else if (!individualPlaylist.videos.videoID.includes(videoID)) {
//         const newVideo = {
//           videoID: videoID,
//         };
//         const updatedvideo = await individualPlaylist.videos.push(newVideo);
//         await updatedvideo.save(updatedvideo);
//         res.status(200).json(updatedvideo);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   });

export default router;
