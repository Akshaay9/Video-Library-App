import { allVideoData } from "./Data/VideoLists.js"
import { usersList } from "./Data/Users.js"
import colors from "colors"
import dbConnection from "./DB.js"
import User from "./Models/UserModel.js"
import Videos from "./Models/VideoModel.js"

dbConnection()

const importData = async() => {
    try {
        await User.deleteMany()
        await Videos.deleteMany()
        await User.insertMany(usersList)
        await Videos.insertMany(allVideoData)
        console.log("videos and users has been successfully added".green.inverse);
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
      await User.deleteMany();
      await Videos.deleteMany()
      console.log("products && user has been deleted".green.inverse);
      process.exit();
    } catch (error) {
      console.log(`{error}`.red.inverse);
      process.exit(1);
    }
};
  
if (process.argv[2] == "-d") {
    destroyData();
  } else {
    importData();
  }