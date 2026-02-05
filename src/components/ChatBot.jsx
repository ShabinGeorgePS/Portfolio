import { useState } from "react";

// Very simple FAQ-style "AI" about Shabin that runs fully on the client.
// It looks like a chat bot and answers questions based on hard-coded knowledge.

const faqPairs = [
  {
    q: ["name", "who are you", "introduce"],
    a: "I'm Shabin George, a Computer Science Engineering student at Sri Krishna College of Technology, Coimbatore.",
  },
  {
    q: ["college", "education", "where do you study"],
    a: "I'm pursuing B.E. Computer Science and Engineering at Sri Krishna College of Technology (2023–2027). I did my higher secondary at Crescent Castle Public School, Ooty.",
  },
  {
    q: ["skills", "technologies", "tech stack"],
    a: "I work with Java, C++, Spring Boot, React.js, MySQL, Git, Linux, Postman and basic AWS. I enjoy building full‑stack web apps and REST APIs.",
  },
  {
    q: ["projects", "what have you built", "experience"],
    a: "I've built projects like an Expense Tracker, an Inquiry Portal REST API, and an Online Voting System using React, Spring Boot and MySQL.",
  },
  {
    q: ["resume", "contact", "reach you", "email"],
    a: "You can contact me via the Contact section below and download my resume from the resume button there.",
  },
  {
    q: ["hobbies", "interests"],
    a: "Beyond coding, I'm interested in cloud, machine learning and cybersecurity, and I enjoy learning new technologies through hands‑on projects.",
  },
];

function generateAnswer(question) {
  const text = question.toLowerCase();

  for (const pair of faqPairs) {
    if (pair.q.some((kw) => text.includes(kw))) {
      return pair.a;
    }
  }

  return "I might not have a perfect answer to that yet, but here’s what I can say: I'm a CS engineering student who loves building full‑stack apps with Java, Spring Boot, React, and MySQL, and I'm always learning new things.";
}

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi, I'm Shabin's portfolio assistant. Ask me anything about his skills, projects, education, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { from: "user", text: trimmed };
    const botMessage = { from: "bot", text: generateAnswer(trimmed) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/40 border border-red-300/60 text-white text-2xl font-bold"
        aria-label="Open chat about Shabin"
      >
        SG
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 max-w-[90vw] bg-black/95 border border-red-500/40 rounded-2xl shadow-2xl flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-red-500/30">
            <div>
              <p className="text-sm font-semibold text-red-400">
                Shabin&apos;s Assistant Donna
              </p>
              <p className="text-xs text-gray-400">
                Ask about skills, projects, or education.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-200 text-lg leading-none"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="h-64 overflow-y-auto flex flex-col gap-2 px-3 py-3">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] px-3 py-2 rounded-xl text-xs ${
                  m.from === "user"
                    ? "bg-red-500 text-white self-end rounded-br-none"
                    : "bg-zinc-800 text-gray-100 self-start rounded-bl-none"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 px-3 py-2 border-t border-zinc-800 bg-zinc-950"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something about Shabin..."
              className="flex-1 bg-transparent outline-none text-xs text-white placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded-lg text-xs font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

