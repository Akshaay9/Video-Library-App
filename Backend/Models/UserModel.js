import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min:4
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
    min:4,
  },
})


const User = mongoose.model("User", userSchema)
export default User