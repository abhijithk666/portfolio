'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import Image from 'next/image';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hey! I'm LowKey, Abhijith's AI assistant. Ask me anything about his work, skills, or experience." },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const history = messages.slice(1); // exclude the initial greeting from history
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'model', text: data.reply || `Error: ${data.error}` }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'model', text: 'Something went wrong. Try again!' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute -top-12 right-0 bg-[#e7f5c9] dark:bg-zinc-800 text-xs text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-xl border border-[#d4eb99] dark:border-zinc-700 whitespace-nowrap shadow-sm pointer-events-none"
          >
            Ask me anything 👋
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-[#e7f5c9] dark:bg-zinc-800 border-b border-r border-[#d4eb99] dark:border-zinc-700 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 overflow-hidden relative cursor-pointer"
        aria-label="Toggle chat"
      >
        <Image src="/images/loki.jpg" alt="Loki" fill className="object-cover" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-80 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-700 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden relative">
                  <Image src="/images/loki.jpg" alt="Loki" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm dark:text-zinc-100">LowKey</h3>
                  <p className="text-xs text-emerald-500 font-medium">● Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-64 overflow-y-auto bg-white dark:bg-zinc-900 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-2xl px-3 py-2 text-sm max-w-[85%] leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-sm'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl rounded-tl-sm px-3 py-2">
                    <Loader2 size={16} className="animate-spin text-zinc-400" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-700">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600 rounded-full pl-4 pr-4 py-2 text-sm dark:text-zinc-200 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="w-8 h-8 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors shrink-0"
                >
                  <Send size={14} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
