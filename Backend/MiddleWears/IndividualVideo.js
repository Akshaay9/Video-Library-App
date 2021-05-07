import  Videos from "../Models/VideoModel.js";
export const getIndividualVideo = async (req, res, next, id) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ error: "invalid video id" });
      }
      const individualVideo = await Videos.findById(id);
      if (!individualVideo) {
        res.status(400).json({ error: "playlist not found" });
      }
      req.individualVideo = individualVideo
      next()
  } catch (error) {
    console.log(error);
  }
};