
import { connectDb, insertDocument } from "../../helpers/db-utils";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      return res.status(422).json({ message: "invalid email address" });
    }

    let client;
    try {
      client = await connectDb();
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "database connection failed!" });
      return;
    }

    try {
      await insertDocument(client, "email", { email });
      client.close();
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "data insertion failed!" });
      return;
    }

    return res.status(201).json({ message: "success!" });
  }
}

export default handler;
