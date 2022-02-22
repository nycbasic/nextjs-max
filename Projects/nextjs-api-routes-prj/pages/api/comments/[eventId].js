import {
  connectDb,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-utils";

const handler = async (req, res) => {
  const { eventId } = req.query;

  //   Database connection Check
  let client;
  try {
    client = await connectDb();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "database connection failed!" });
  }

  // REST request
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

    try {
      const result = await insertDocument(client, "comments", newComment);
      console.log(result);
      newComment.id = result.insertedId;
      return res.status(201).json({ message: "success!", comment: newComment });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "data insertion failed!" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        { eventId }
      );
      console.log(documents);
      return res.status(201).json({ comments: documents });
    } catch (err) {
      return res.status(500).json({ message: "No data!" });
    }
  }
};

export default handler;
