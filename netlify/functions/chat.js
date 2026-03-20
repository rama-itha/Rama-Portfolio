import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { messages, system } = await req.json();

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      system,
      messages,
    });

    return new Response(JSON.stringify({ content: response.content }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = { path: "/api/chat" };