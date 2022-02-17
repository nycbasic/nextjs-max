function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      return res.status(422).json({ message: "invalid email address" });
    }
    console.log(email);
    return res.status(201).json({ message: "success!" });
  }
}

export default handler;
