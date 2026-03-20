import express from "express";
import cors from "cors";
import Anthropic from "@anthropic-ai/sdk";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, system } = req.body;
    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      system,
      messages,
    });
    res.json({ content: response.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log("Proxy running on http://localhost:3001"));