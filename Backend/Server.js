import express from "express";
import cors from "cors";
import dbConnection from "./DB.js";
import colors from "colors";
import dotenv from "dotenv";
import UserLoginAndSignUpRoute from "./Routes/UserLoginSignUpRoute.js";
import PlaylistRoute from "./Routes/PlayListRoute.js";
import NotesRoute from "./Routes/Notes.js";
import LikedVideos from "./Routes/LikedVideoRoute.js";
import WatchLaterVideRoute from "./Routes/WatchLaterRoute.js";
import VideoRoute from "./Routes/VIdeoLists.js";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

dbConnection();

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`server started on port ${PORT}`.yellow.underline.bold)
);
app.get("/", (req, res) => {
  res.send("API is running....");
});
// routes
app.use(`/api/users`, UserLoginAndSignUpRoute);
app.use(`/api/playlist`, PlaylistRoute);
app.use(`/api/notes`, NotesRoute);
app.use(`/api/likedvideos`, LikedVideos);
app.use(`/api/watchlater`, WatchLaterVideRoute);
app.use(`/api/videos`, VideoRoute);

// custome err handeling
app.use((err, req, res, next) => {
  console.log(err);
  res.json({
    message: err.message,
    stack: err.stack,
  });
});
// 404 handling
app.use("*", function (req, res) {
  return res.status(400).json({ error: "Page Not Found" });
});
