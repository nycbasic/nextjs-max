// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";

export const buildFeedBackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};

export const extractFeedback = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, text } = JSON.parse(req.body);
    const filePath = buildFeedBackPath();
    const data = extractFeedback(filePath);

    const newFeedBack = {
      id: new Date().toISOString(),
      email,
      text,
    };
    data.push(newFeedBack);
    fs.writeFileSync(filePath, JSON.stringify(data));
    return res.status(201).json({ message: "success!", feedback: newFeedBack });
  } else if (req.method === "GET") {
    const filePath = buildFeedBackPath();
    const data = extractFeedback(filePath);
    return res.status(201).json(data);
  }
  return res.status(400).json({ error: "no data sent!" });
}
