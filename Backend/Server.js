import express from "express"
import cors from "cors"
import dbConnection from "./DB.js"
import colors from "colors";
import dotenv from 'dotenv'
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

dbConnection()

app.get("/", (req, res) => {
    res.status(200).json("hey api is running")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server started on port ${PORT}`.yellow.underline.bold)
);

