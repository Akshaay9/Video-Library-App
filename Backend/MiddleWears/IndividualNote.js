import  Notes from "../Models/NotesModel.js";
export const getIndividualNotes = async (req, res, next, id) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ error: "invalid notes id" });
      }
      const individualNote = await Notes.findById(id);
      if (!individualNote) {
        res.status(400).json({ error: "note not found" });
      }
      req.individualNote = individualNote
      next()
  } catch (error) {
    console.log(error);
  }
};