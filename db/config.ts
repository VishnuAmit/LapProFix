/**
 * The function establishes a connection to a MongoDB database using Mongoose in a TypeScript
 * environment.
 */
import mongoose from "mongoose";

//encoding username and password to avoid issues due to Special Characters in Connection String credentials
const username = encodeURIComponent(process.env.MONGODB_USERNAME || " ");
const password = encodeURIComponent(process.env.MONGODB_PASSWORD || " ");
const cluster = process.env.MONGODB_CLUSTER;

export default async function connection() {
    try {
        // await mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.vlkbi.mongodb.net/?retryWrites=true&w=majority&appName=lapfix`);
        await mongoose.connect(`mongodb://localhost:27017/newUser`)
        console.log('connection true');
    } catch (err) {
        console.log(err);
    }
}
