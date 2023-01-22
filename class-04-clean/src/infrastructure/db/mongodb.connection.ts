/* eslint-disable @typescript-eslint/no-floating-promises */
import mongoose from "mongoose";

const connectMongoDB = async (url): Promise<void> => {
  mongoose.connect(url, {}, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Database connected succesfully");
    }
  });
};

export default connectMongoDB;
