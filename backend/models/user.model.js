import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  gender:{
    type: String,
    required: true,
    enum: ["male", "female"]
  },
  profilePic:{
    type: String,
    default: "",
  },
}, {timestamps: true}); //timestamps: true option adds createdAt and updatedAt fields to the document which store the timestamp of the document creation and last update.

const User = mongoose.model("User", userSchema);
// The User model is exported from the user.model.js file. This model will be used to interact with the users collection in the MongoDB database.
// The userSchema is a mongoose schema that defines the structure of the user document in the users collection. The schema defines the fields fullName, username, password
//User will be the users data

export default User;