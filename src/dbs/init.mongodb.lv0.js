'use strict'

import mongoose from 'mongoose';

const connectionString = `mongodb://localhost:27017/ShopForDev`;
mongoose.connect(connectionString).then( _ => console.log("Connected to MongoDB at Singleton Pattern"))
.catch(err => console.error("MongoDB connection error:", err));

if( 1 === 0) {
    mongoose.set('debug', true);
    mongoose.set('debug', {color: true});
}

export default mongoose;