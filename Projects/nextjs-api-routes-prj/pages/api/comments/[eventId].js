const handler = (req, res) => {
  const { eventId } = req.query;
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
      id: eventId,
      email,
      name,
      text,
    };

    console.log(newComment);
    return res.status(201).json({ message: "success!", comment: newComment });
  }

  if (req.method === "GET") {
    const comments = [
      {
        id: "c1",
        email: "test1@gmail.com",
        name: "test",
        text: "THIS IS A TEST!",
      },
      {
        id: "c2",
        email: "test2@gmail.com",
        name: "test2",
        text: "THIS IS A TEST!",
      },
      {
        id: "c3",
        email: "test3@gmail.com",
        name: "test3",
        text: "THIS IS A TEST!",
      },
    ];

    return res.status(201).json({ comments });
  }
};

export default handler;
