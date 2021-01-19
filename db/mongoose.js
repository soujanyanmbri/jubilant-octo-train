
import mongoose from "mongoose";
import { config } from "dotenv";
import debug from "debug";

config();
const DEBUG = debug("dev");


const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DATABASE_URL, options)
  .then(() => {
    DEBUG("MongoDB is connected");
  })
  .catch((err) => {
    DEBUG("MongoDB connection unsuccessful");
    DEBUG(err);
  });



//const mongoose = require('mongoose')
//mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,  useUnifiedTopology: true})
//const db = mongoose.connection
//db.on('error', error => console.error(error))
//db.once('open', () => console.log('Connected to Mongoose'))