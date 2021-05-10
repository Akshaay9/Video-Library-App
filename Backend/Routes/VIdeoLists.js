import Videos from "../Models/VideoModel.js";
import express from "express";
import { getIndividualVideo } from "../MiddleWears/IndividualVideo.js";
const router = express.Router();

router.param("videoID", getIndividualVideo);

router.get("/all", async (req, res) => {
  const allVideos = await Videos.find({});
  res.status(200).json(allVideos);
});
router.get("/bodybuilding", async (req, res) => {
  const fatlossVideos = await Videos.find({ category: "bodybuilding" });
  res.status(200).json(fatlossVideos);
});
router.get("/fatloss", async (req, res) => {
  const fatlossVideos = await Videos.find({ category: "fatloss" });
  res.status(200).json(fatlossVideos);
});
router.get("/calisthenics", async (req, res) => {
  const calisthenicsVideos = await Videos.find({ category: "calisthenics" });
  res.status(200).json(calisthenicsVideos);
});
router.get("/yoga", async (req, res) => {
  const yogaVideos = await Videos.find({ category: "yoga" });
  res.status(200).json(yogaVideos);
});
router.get("/zumba", async (req, res) => {
  const zumbaVideos = await Videos.find({ category: "zumba" });
  res.status(200).json(zumbaVideos);
});
router.get("/:videoID", async (req, res) => {
  const { individualVideo } = req;
  res.status(200).json(individualVideo);
});

export default router;
