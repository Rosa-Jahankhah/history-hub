import { NextResponse } from "next/server";
import { buildSiteKnowledgeContext } from "@/lib/site-knowledge";

type IncomingMessage = { role: string; content: string };

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "The assistant is not configured yet. Add OPENAI_API_KEY to web/.env.local and restart the dev server.",
      },
      { status: 503 },
    );
  }

  let body: { messages?: IncomingMessage[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const raw = body.messages ?? [];
  const dialogue = raw.filter(
    (m): m is { role: "user" | "assistant"; content: string } =>
      (m.role === "user" || m.role === "assistant") &&
      typeof m.content === "string" &&
      m.content.trim().length > 0,
  );

  if (!dialogue.length) {
    return NextResponse.json(
      { error: "Send a non-empty messages array with user/assistant turns." },
      { status: 400 },
    );
  }

  const system = buildSiteKnowledgeContext();
  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

  const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.4,
      messages: [{ role: "system", content: system }, ...dialogue],
    }),
  });

  if (!upstream.ok) {
    const detail = await upstream.text();
    console.error("OpenAI API error:", detail);
    return NextResponse.json(
      { error: "The model provider returned an error. Check your key and model name." },
      { status: 502 },
    );
  }

  const data = (await upstream.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const message = data.choices?.[0]?.message?.content?.trim();

  if (!message) {
    return NextResponse.json({ error: "Empty model response" }, { status: 502 });
  }

  return NextResponse.json({ message });
}
