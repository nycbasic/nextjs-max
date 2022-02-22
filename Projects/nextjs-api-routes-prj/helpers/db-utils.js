import { MongoClient } from "mongodb";

export async function connectDb() {
  const client = await MongoClient.connect(
    "mongodb+srv://<username>:<password>@web-development-project.b1s6x.mongodb.net/events?retryWrites=true&w=majority"
  );

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
