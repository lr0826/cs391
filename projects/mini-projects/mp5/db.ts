// db.ts
import { MongoClient, Db, Collection, Document } from "mongodb";

// Grab env var, check it, then narrow to string
const uri = process.env.MONGO_URI;
if (!uri) {
    throw new Error("MONGO_URI environment variable is undefined");
}
const MONGO_URI: string = uri;

// You can change this for each mini-project if you want
const DB_NAME = "cs391-url-shortener";

// For the URL shortener you can export this:
export const URLS_COLLECTION = "urls";

let client: MongoClient | null = null;
let db: Db | null = null;

async function connect(): Promise<Db> {
    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    return client.db(DB_NAME);
}

// Generic collection helper, but without `any`
export default async function getCollection<T extends Document = Document>(
    collectionName: string,
): Promise<Collection<T>> {
    if (!db) {
        db = await connect();
    }
    return db.collection<T>(collectionName);
}
