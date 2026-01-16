import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
