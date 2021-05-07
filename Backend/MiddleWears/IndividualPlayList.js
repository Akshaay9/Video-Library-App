import Playlist from "../Models/PlayListModel.js";
export const getIndividualPlayList = async (req, res, next, id) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ error: "invalid playlist id" });
      }
      const individualPlaylist = await Playlist.findById(id);
      if (!individualPlaylist) {
        res.status(400).json({ error: "playlist not found" });
      }
      req.individualPlaylist = individualPlaylist
      next()
  } catch (error) {
    console.log(error);
  }
};
