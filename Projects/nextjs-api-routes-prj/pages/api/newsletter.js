import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      return res.status(422).json({ message: "invalid email address" });
    }

    const client = await MongoClient.connect(
      "mongodb+srv://nycbasic:Cqxq1433@!@web-development-project.b1s6x.mongodb.net/events?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("emails").insertOne({
      email,
    });

    client.close();
    return res.status(201).json({ message: "success!" });
  }
}

export default handler;
