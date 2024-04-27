import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    googleId:String,
    displayName:String,
    email:String,
    image:String
  },
  { timestamps: true }
);

const userDB = mongoose.model("GoogleUser", userSchema);

export default userDB;
