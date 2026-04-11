import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
  isLink?: boolean;
}

const GPT_URL = "https://chatgpt.com/g/g-69d9745556cc8191be7937e8b5be26b8-global-gallivant";

const SUGGESTED_PROMPTS = [
  "Where in Southeast Asia has Zoe been?",
  "What's included in a travel consultation?",
  "I'm planning a trip to Colombia. Where do I start?",
  "How much are the destination guides?",
  "What rentals are available in the Philippines?",
  "How can I support Zoe's travels?",
];

export default function AskZoe() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim() || thinking) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setThinking(true);

    // Brief thinking delay for natural feel, then open GPT and show reply
    setTimeout(() => {
      setThinking(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Great question! Let's continue this conversation in my full AI chat — I can go much deeper there.",
          isLink: true,
        },
      ]);
      window.open(GPT_URL, "_blank", "noopener,noreferrer");
    }, 900);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <section id="ask-zoe" className="py-24 px-6 md:px-16" style={{ background: "var(--gg-bg-secondary)" }}>
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gg-accent-gold)" }}>
            AI Travel Assistant
          </div>
          <h2
            className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
          >
            Ask Zoe
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px var(--gg-accent-gold)" }}> Anything.</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "var(--gg-text-muted)" }}>
            Destinations, services, pricing, travel tips — get real answers from Zoe's AI, trained on her 20-country experience.
          </p>
        </motion.div>

        {/* Chat container */}
        <motion.div
          className="flex flex-col overflow-hidden"
          style={{
            background: "var(--gg-bg-primary)",
            border: "1px solid rgba(255,215,0,0.12)",
            borderRadius: "var(--gg-radius-card)",
            boxShadow: "var(--gg-shadow-haptic)",
            minHeight: "480px",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* Chat header bar */}
          <div
            className="flex items-center justify-between gap-3 px-6 py-4 shrink-0"
            style={{ borderBottom: "1px solid rgba(255,215,0,0.08)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--gg-accent-gold)" }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#05070A" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 0 .284 2.253" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: "var(--gg-text-primary)", fontFamily: "var(--font-display)" }}>
                  Zoe's Travel Assistant
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  <span className="text-[11px]" style={{ color: "var(--gg-text-muted)" }}>Online · Powered by ChatGPT</span>
                </div>
              </div>
            </div>

            {/* Open GPT link */}
            <a
              href={GPT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] font-bold tracking-wide px-3 py-1.5 transition-all duration-200"
              style={{
                border: "1px solid rgba(255,215,0,0.25)",
                color: "var(--gg-accent-gold)",
                borderRadius: "var(--gg-radius-agentic)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,215,0,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,215,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,215,0,0.25)";
              }}
            >
              Open Full Chat
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          {/* Messages area */}
          <div className="flex-1 px-6 py-6 space-y-4 overflow-y-auto" style={{ minHeight: "280px", maxHeight: "420px", scrollbarWidth: "thin" }}>
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center gap-6 py-4">
                <p className="text-sm text-center" style={{ color: "var(--gg-text-muted)" }}>
                  What would you like to know? Try one of these:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="text-left text-sm px-4 py-3 transition-all"
                      style={{
                        border: "1px solid rgba(255,215,0,0.15)",
                        color: "var(--gg-text-muted)",
                        background: "rgba(255,215,0,0.03)",
                        borderRadius: "14px",
                        transition: "var(--gg-transition-fluid)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,215,0,0.4)";
                        e.currentTarget.style.color = "var(--gg-text-primary)";
                        e.currentTarget.style.background = "rgba(255,215,0,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,215,0,0.15)";
                        e.currentTarget.style.color = "var(--gg-text-muted)";
                        e.currentTarget.style.background = "rgba(255,215,0,0.03)";
                      }}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <AnimatePresence>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="max-w-[78%] text-sm leading-relaxed px-4 py-3"
                        style={{
                          borderRadius: msg.role === "user" ? "20px 20px 4px 20px" : "4px 20px 20px 20px",
                          background: msg.role === "user" ? "var(--gg-accent-gold)" : "rgba(255,255,255,0.05)",
                          color: msg.role === "user" ? "#05070A" : "var(--gg-text-primary)",
                          border: msg.role === "assistant" ? "1px solid rgba(255,215,0,0.08)" : "none",
                        }}
                      >
                        {msg.content}
                        {msg.isLink && (
                          <a
                            href={GPT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 flex items-center gap-2 text-xs font-bold px-3 py-2 w-fit transition-all duration-200"
                            style={{
                              background: "var(--gg-accent-gold)",
                              color: "#05070A",
                              borderRadius: "var(--gg-radius-agentic)",
                            }}
                          >
                            Continue on ChatGPT
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Thinking dots */}
                {thinking && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div
                      className="px-4 py-3"
                      style={{
                        borderRadius: "4px 20px 20px 20px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,215,0,0.08)",
                      }}
                    >
                      <span className="flex gap-1 items-center h-5">
                        {[0, 1, 2].map((j) => (
                          <motion.span
                            key={j}
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: "var(--gg-accent-gold)", opacity: 0.5 }}
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: j * 0.2 }}
                          />
                        ))}
                      </span>
                    </div>
                  </motion.div>
                )}
                <div ref={bottomRef} />
              </>
            )}
          </div>

          {/* Input bar */}
          <div
            className="px-6 py-4 shrink-0"
            style={{ borderTop: "1px solid rgba(255,215,0,0.08)" }}
          >
            <div
              className="flex items-end gap-3"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,215,0,0.15)",
                borderRadius: "var(--gg-radius-agentic)",
                padding: "12px 16px",
              }}
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about destinations, bookings, guides, rentals..."
                rows={1}
                disabled={thinking}
                className="flex-1 bg-transparent text-sm resize-none outline-none"
                style={{
                  color: "var(--gg-text-primary)",
                  maxHeight: "120px",
                  lineHeight: "1.6",
                }}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || thinking}
                className="shrink-0 flex items-center gap-2 text-sm font-bold px-5 py-2.5 transition-all"
                style={{
                  background: input.trim() && !thinking ? "var(--gg-accent-gold)" : "rgba(255,215,0,0.12)",
                  color: input.trim() && !thinking ? "#05070A" : "var(--gg-accent-gold)",
                  borderRadius: "var(--gg-radius-agentic)",
                  transition: "var(--gg-transition-fluid)",
                  opacity: thinking ? 0.6 : 1,
                }}
              >
                {thinking ? "..." : "Send"}
                {!thinking && (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-[10px] text-center mt-3" style={{ color: "var(--gg-text-muted)", opacity: 0.35 }}>
              Press Enter to send · Shift + Enter for new line · Powered by ChatGPT
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
