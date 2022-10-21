import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
const app = express();

dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user",userRoutes);
//const username = encodeURIComponent();
//const password = encodeURIComponent();

app.get('/',(req,res)=>{
  res.send('APP IS RUNNING.')
})

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => {
    console.log("error: " + error.message);
  });

//mongoose.set('useFindAndModify',false);
