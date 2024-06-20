import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  receiverId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  message:{
    type: String,
    required: true
  }
  //The message schema defines the structure of the message document in the messages collection. The schema defines the fields senderId, receiverId, and message.

}, {timestamps: true}); //timestamps: true option adds createdAt and updatedAt fields to the document which store the timestamp of the document creation and last update.

const Message = mongoose.model("Message", messageSchema);

export default Message;