const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const { minLength, maxLength, string } = require("zod");
require("dotenv").config();

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    // Perform database operations here
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}

connectDB();

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const accountSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  prodId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"prodId",
    required:true
  }
})


const prodSchema = new mongoose.Schema({
  prodName:{
    type:String,
    requireed:true,
  },
  prodDesc:{
    type:string,
    required:true,
  },
  prodPrice:{
    type:Number,
    required:true,
  }
})

const User = mongoose.model("User",userSchema);
const Account = mongoose.model("account",accountSchema);
const Product = mongoose.model("Product",prodSchema);

module.exports={
  User,
  Account,
  Product
}
