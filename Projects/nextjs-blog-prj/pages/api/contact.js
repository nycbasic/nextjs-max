import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input!" });
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://nycbasic:Cqxq1433%40!@web-development-project.b1s6x.mongodb.net/blog?retryWrites=true&w=majority"
      );
    } catch (err) {
      console.log(client);
      return res
        .status(500)
        .json({ message: "Connection to database failed!" });
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (err) {
      client.close();
      return res.status(500).json({ messaage: "storing message failed!" });
    }

    client.close();

    return res
      .status(201)
      .json({ message: "Message stored!", message: newMessage });
  }
}
