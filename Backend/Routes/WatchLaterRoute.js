import express from "express";
import privateRoute from "../MiddleWears/Authentication.js";
import Watched from "../Models/WatchLaterModel.js";
const router = express.Router();

router
  .route("/:videoID?")
  // post
  // private route
  // watch later a video
  .post(privateRoute, async (req, res) => {
    const { videoID } = req.params;
    const isVideoAlredyWatched = await Watched.find({
      user: req.user.id,
      videoID: videoID,
    });

    if (isVideoAlredyWatched.length > 0) {
      res.status(400).json("video alredy watched later");
    } else if (isVideoAlredyWatched.length == 0) {
      const newWatchLaterVideo = new Watched({
        user: req.user.id,
        videoID: videoID,
      });
      await newWatchLaterVideo.save();
      const watchLaterVideo = await Watched.find({
        user: req.user.id,
      }).populate("videoID");
      res.status(200).json(watchLaterVideo);
    }
  })
  // delete
  // private route
  // delete  watch later video
  .delete(privateRoute, async (req, res) => {
    const { videoID } = req.params;
    const deleteWatcheLaterVideo = await Watched.find({
      user: req.user.id,
      videoID: videoID,
    });
    if (deleteWatcheLaterVideo.length == 0) {
      return res.status(400).json("video is not watch latered");
    }
    await Watched.findByIdAndDelete(deleteWatcheLaterVideo[0]._id);
    const watchLaterVideo = await Watched.find({
      user: req.user.id,
    }).populate("videoID");
    res.status(200).json(watchLaterVideo);
  })
  // get
  // private route
  // get  watch later video
  .get(privateRoute, async (req, res) => {
    const watchLaterVideo = await Watched.find({
      user: req.user.id,
    }).populate("videoID");
    res.status(200).json(watchLaterVideo);
  });

export default router;
