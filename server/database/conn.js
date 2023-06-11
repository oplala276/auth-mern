import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";

async function connect() {
    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();


    // mongoose.set('strictQuery', ture)
    const db = await mongoose.connect(getUri);
    console.log("Database is connected");
    return db;
}

export default connect;