import path from "path";

//Package imports-
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//Routes-
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

//Database imports-
import connectToMongoDB from "./db/connectToMongoDB.js";
import {app, server} from "./socket/socket.js";

const PORT =  process.env.PORT || 5000;

//For deployment
const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); //middleware to parse the request body
app.use(cookieParser()); //middleware to parse cookies

//Middlewares
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req,res)=> {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// app.get("/", (req,res)=>{
//   //root route http://localhost:5000/
//   res.send("Hello World");
// });

server.listen(PORT, ()=> {
  connectToMongoDB();
  console.log(`Server started on port ${PORT}`);
});

