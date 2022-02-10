// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";

const buildFeedBackPath = () => {
   const filePath = path.join(process.cwd(), "data", "feedback.json");
   const fileData = fs.readFileSync(filePath);
   const data = JSON.parse(fileData);
   return data;
}

export default function handler(req, res) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    const email = body.email;
    const text = body.text;

    const newFeedBack = {
      id: new Date().toISOString(),
      email,
      text,
    };

    console.log("FROM THE BACK END", newFeedBack);
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedBack);
    fs.writeFileSync(filePath, JSON.stringify(data));
    return res.status(201).json({ message: "success!", feedback: newFeedBack });
  }
  return res.status(400).json({ error: "no data sent!" });
}
