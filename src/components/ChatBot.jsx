import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/40 border border-red-300/60 text-white text-2xl font-bold"
        aria-label="Open chat about Shabin"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 10px 20px rgba(239, 68, 68, 0.4)",
            "0 10px 30px rgba(239, 68, 68, 0.6)",
            "0 10px 20px rgba(239, 68, 68, 0.4)",
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        data-testid="chatbot-toggle"
      >
        SG
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 max-w-[90vw] bg-black/95 backdrop-blur-md border border-red-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-red-500/30 bg-gradient-to-r from-red-900/20 to-transparent">
              <div>
                <p className="text-sm font-semibold text-red-400">
                  Shabin&apos;s Assistant
                </p>
                <p className="text-xs text-gray-400">
                  Ask about skills, projects, or education.
                </p>
              </div>
              <motion.button
                type="button"
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-200 text-2xl leading-none"
                aria-label="Close chat"
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </div>

            <div className="h-64 overflow-y-auto flex flex-col gap-2 px-3 py-3">
              <AnimatePresence>
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-xs ${m.from === "user"
                        ? "bg-red-500 text-white self-end rounded-br-none shadow-lg"
                        : "bg-zinc-800 text-gray-100 self-start rounded-bl-none shadow-lg"
                      }`}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {m.text}
                  </motion.div>
                ))}
              </AnimatePresence>
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
                data-testid="chatbot-input"
              />
              <motion.button
                type="submit"
                className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded-lg text-xs font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="chatbot-send"
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

