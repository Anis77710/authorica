import mongoose from "mongoose";
import config from "./config.js";
async function ConnectDb() {
    await mongoose.connect(config.MONGO_URI);
    console.log("connected to db");
}

export default ConnectDb;