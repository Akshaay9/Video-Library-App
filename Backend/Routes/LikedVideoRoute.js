import express from "express";
import privateRoute from "../MiddleWears/Authentication.js";
import Liked from "../Models/LikedVideosModel.js";
const router = express.Router();

router
  .route("/:videoID?")
  // post
  // private route
  // like a video
  .post(privateRoute, async (req, res) => {
    const { videoID } = req.params;
    const isVideoAlredyLiked = await Liked.find({
      user: req.user.id,
      videoID: videoID,
    });

    if (isVideoAlredyLiked.length > 0) {
      res.status(400).json("video alredy liked");
    } else if (isVideoAlredyLiked.length == 0) {
      const newLikedVideo = new Liked({
        user: req.user.id,
        videoID: videoID,
      });
      await newLikedVideo.save();
      const likedVideo = await Liked.find({
        user: req.user.id,
      }).populate("videoID");
      res.status(200).json(likedVideo);
    }
  })
  // delete
  // private route
  // delete liked video
  .delete(privateRoute, async (req, res) => {
    const { videoID } = req.params;
    const deleteLikedVideo = await Liked.find({
      user: req.user.id,
      videoID: videoID,
    });
    if (deleteLikedVideo.length == 0) {
      return res.status(400).json("video is not liked");
    }
    await Liked.findByIdAndDelete(deleteLikedVideo[0]._id);
    const likedVideo = await Liked.find({
      user: req.user.id,
    }).populate("videoID");
    res.status(200).json(likedVideo);
  })
  // get
  // private route
  // get liked video
  .get(privateRoute, async (req, res) => {
    const likedVideo = await Liked.find({
      user: req.user.id,
    }).populate("videoID");
    res.status(200).json(likedVideo);
  });

export default router;
