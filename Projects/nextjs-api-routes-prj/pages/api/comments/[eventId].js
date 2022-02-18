import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const { eventId } = req.query;
  const client = await MongoClient.connect(
    "mongodb+srv://<username>:<password>!@web-development-project.b1s6x.mongodb.net/events?retryWrites=true&w=majority"
  );
  if (req.method === "POST") {
    const { email, name, text } = JSON.parse(req.body);
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      !text.trim() === ""
    ) {
      return res.status(422).json({ message: "invalid input" });
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);
    newComment.id = result.insertedId;
    console.log(result);
    return res.status(201).json({ message: "success!", comment: newComment });
  }

  if (req.method === "GET") {
    const db = client.db();
    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();
    return res.status(201).json({ comments: documents });
  }
  client.close();
};

export default handler;
