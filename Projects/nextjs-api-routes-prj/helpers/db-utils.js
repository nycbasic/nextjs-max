import { MongoClient } from "mongodb";
import 'dotenv/config';

export async function connectDb() {
  const client = await MongoClient.connect(process.env.DB);

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();
  const document = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  return document;
}
