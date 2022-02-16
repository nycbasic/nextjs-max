import { buildFeedBackPath, extractFeedback } from "../feedback";

function handler(req, res) {
  const feedbackID = req.query.feedbackId;
  const filePath = buildFeedBackPath();
  const data = extractFeedback(filePath);
  console.log(feedbackID)
  console.log(data);
  const selectedFeedback = data.find((feedback) => feedback.id === feedbackID);
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
