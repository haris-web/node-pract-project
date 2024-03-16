import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
    },
    avatar: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
  
);
 
userSchema.pre("save", async function (next) {
  if(this.isModified("password")) {
    this.password = bcrypt.hash(this.password,10);
    next()};
})
 userSchema.methods.isPasswordCorrect = async function  (password) {
    return bcrypt.compare(password, this.password);
 }
 userSchema.methods.generateAccessToken = async function (){
   await jwt.sign({
        _id:this._id,
        username:this.name,
        fullName:this.fullName,
        email:this.email,
    },"SASDCDANCKDNCDHFHVFDHVC",
    {
        expiresIn: 60 * 60 * 24 * 7,
    })
 }
 userSchema.methods.generateRefreshToken = async function (){

 }
export const User = mongoose.model("User", userSchema);
