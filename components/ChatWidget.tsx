'use client';

import { useState } from 'react';

type Message = {
  role: 'user' | 'bot';
  text: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // 🔥 Typing effect function
  const typeWriterEffect = (text: string, callback: (val: string) => void) => {
    let i = 0;
    const interval = setInterval(() => {
      callback(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 20);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:4001/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const text = await res.text();
      const data = JSON.parse(text);

      // Add empty bot message first
      const botMessage: Message = { role: 'bot', text: '' };
      setMessages([...updatedMessages, botMessage]);

      // 🔥 typing effect
      typeWriterEffect(data.reply, (val) => {
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: 'bot', text: val };
          return copy;
        });
      });

    } catch (err) {
      console.log('Error:', err);

      setMessages([
        ...updatedMessages,
        { role: 'bot', text: '❌ Error connecting to AI' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
  onClick={() => setOpen(!open)}
  className="fixed bottom-6 right-6 bg-green-800 hover:bg-green-900 
  text-white px-4 py-3 rounded-full shadow-lg z-50 flex items-center gap-2 animate-pulse"
>
  🤖 {open ? 'Close Assistant' : 'AI Assistant'}
</button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-[450px] bg-white shadow-2xl rounded-2xl flex flex-col z-50">

          {/* Header */}
          <div className="bg-green-700 text-white p-3 rounded-t-2xl font-semibold">
            Safari Assistant 🐘
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm ${
                  msg.role === 'user'
                    ? 'bg-green-100 ml-auto w-fit'
                    : 'bg-gray-100 mr-auto w-fit'
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* ✅ Loading indicator */}
            {loading && (
              <div className="bg-gray-100 mr-auto w-fit p-2 rounded-lg text-sm italic">
                AI is thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-2 flex gap-2 border-t">
            <input
              className="flex-1 border rounded-lg px-2 py-1 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about safari..."
            />
            <button
              onClick={sendMessage}
              className="bg-green-700 text-white px-3 rounded-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}