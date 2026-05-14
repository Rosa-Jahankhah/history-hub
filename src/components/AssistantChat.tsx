"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Role = "user" | "assistant";

type ChatMessage = { role: Role; content: string };

export function AssistantChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Ask me how to find sources, compare archives, or outline a research question. I am tuned to the links and archive notes on this site.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  async function send() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = (await res.json()) as { message?: string; error?: string };

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      if (!data.message) {
        throw new Error("Empty response");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message as string },
      ]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-2xl border border-amber-900/15 bg-white/80 p-5 shadow-inner shadow-amber-900/5 sm:p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-2xl text-amber-950">Research assistant</h2>
        <span className="text-xs text-amber-900/55">Powered by your API key on the server</span>
      </div>
      <p className="mt-1 text-sm text-amber-950/70">
        Tips on sources, search strategies, and how to read archival material—not a substitute for
        reading originals.
      </p>

      <div className="mt-4 flex max-h-80 flex-col gap-3 overflow-y-auto rounded-lg border border-amber-900/10 bg-[#faf7f2] p-3 text-sm">
        {messages.map((m, i) => (
          <div
            key={`${m.role}-${i}`}
            className={
              m.role === "user"
                ? "self-end max-w-[90%] rounded-lg bg-amber-900 px-3 py-2 text-amber-50"
                : "self-start max-w-[95%] rounded-lg bg-white px-3 py-2 text-amber-950/90 shadow-sm"
            }
          >
            {m.content}
          </div>
        ))}
        {loading && (
          <div className="text-xs italic text-amber-900/60">Thinking…</div>
        )}
        <div ref={bottomRef} />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-800" role="alert">
          {error}
        </p>
      )}

      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="assistant-input">
          Message
        </label>
        <input
          id="assistant-input"
          className="min-h-11 flex-1 rounded-lg border border-amber-900/20 bg-white px-3 text-amber-950 outline-none ring-amber-700/30 placeholder:text-amber-900/40 focus:ring-2"
          placeholder="e.g. How should I start with historic newspapers?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void send();
            }
          }}
          disabled={loading}
        />
        <button
          type="button"
          onClick={() => void send()}
          disabled={loading || !input.trim()}
          className="rounded-lg bg-amber-900 px-4 py-2.5 text-sm font-medium text-amber-50 transition hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </section>
  );
}
