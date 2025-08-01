"use strict";

import mongoose from "mongoose";
import countConnect from "../helper/check.connect.js";
import dbConfig from "../config/config.mongodb.js";

const connectionString = `mongodb://${dbConfig.db.host}:${dbConfig.db.port}/${dbConfig.db.name}`;

class Database {
  constructor() {
    this.connect();
  }
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectionString)
      .then(() => console.log("Connected to MongoDb", countConnect()))
      .catch((err) => console.error("MongoDB connection error:", err));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
const instanceMongoDB = Database.getInstance();
export default instanceMongoDB;
