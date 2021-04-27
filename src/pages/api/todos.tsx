import { NextApiHandler } from "next";
import { v4 as uuidv4 } from "uuid";

const wait = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

const todos = [
  { id: uuidv4(), text: "todo0", completed: false },
  { id: uuidv4(), text: "todo1", completed: false },
  { id: uuidv4(), text: "todo2", completed: false },
];

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "GET": {
      await wait();
      res.status(200).json(todos);
      break;
    }
    default: {
      res.status(404).json({ message: "Not Found" });
      break;
    }
  }
};

export default handler;
