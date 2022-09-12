import express from "express";
import mongoose from "mongoose";
const user = mongoose.Schema(
    {
      Name:String,
      Address:String,
      Email:String,
      Password:String,
      Age:Number
    });
    export default mongoose.model("userModel",user);


