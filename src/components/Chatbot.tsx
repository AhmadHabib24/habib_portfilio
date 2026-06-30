"use client";

import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: React.ReactNode;
};

const contactResponse = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <span>You can reach Habib directly via:</span>
    <a href="mailto:mhabibahmadm224.uoswl@gmail.com" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
      📧 mhabibahmadm224.uoswl@gmail.com
    </a>
    <a href="https://wa.me/923172770245" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
      💬 WhatsApp: +92 317 2770245
    </a>
    <a href="https://wa.me/923390054629" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
      💬 WhatsApp: +92 339 0054629
    </a>
  </div>
);

const RESPONSES: Record<string, React.ReactNode> = {
  "hello": "Hi there! I'm HabibBot. How can I help you today? You can ask me about Habib's skills, projects, or how to contact him.",
  "hi": "Hello! I'm HabibBot. How can I help you today?",
  "skills": "Habib is a Backend & AI Developer. His core skills include Laravel, Python, Node.js, AI Agents, Database Design, and modern web architectures.",
  "tech": "Habib works with Laravel, Python, MySQL, Framer Motion, Next.js, and integrates AI agents into robust architectures.",
  "projects": "Habib has built many impressive platforms like Office Management Systems (OMS), Gulf Got Talents, Velocrosshairs, and various ERPs. Check out the 'Featured Work' section!",
  "work": "Habib's work spans across e-commerce, AI tools directories, ERP systems, and talent acquisition platforms.",
  "contact": contactResponse,
  "appointment": contactResponse,
  "hire": "Habib is always open to discussing new backend or AI projects! Type 'contact' to get his direct phone numbers and email.",
  "default": "I'm a simple bot, so I might not understand everything. Try asking about Habib's 'skills', 'projects', or 'contact' information!"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: "Hi! I'm Habib's virtual assistant. Ask me about his work, skills, or experience!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const newUserMsg: Message = { id: Date.now().toString(), sender: 'user', text: userText };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    // Simulate thinking delay
    setTimeout(() => {
      const lowerText = userText.toLowerCase();
      let replyText = RESPONSES["default"];

      for (const key in RESPONSES) {
        if (lowerText.includes(key)) {
          replyText = RESPONSES[key];
          break;
        }
      }

      const newBotMsg: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: replyText };
      setMessages(prev => [...prev, newBotMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        style={floatingBtnStyle}
        className="glow-on-hover"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={chatWindowStyle}
            className="glass-panel"
          >
            {/* Header */}
            <div style={headerStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={botAvatarStyle}>🤖</div>
                <h3 style={headerTitleStyle}>HabibBot</h3>
              </div>
              <button onClick={() => setIsOpen(false)} style={closeBtnStyle}>
                ✕
              </button>
            </div>

            {/* Messages Area */}
            <div style={messagesAreaStyle}>
              {messages.map((msg) => (
                <div key={msg.id} style={{ ...messageRowStyle, justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{ ...messageBubbleStyle, backgroundColor: msg.sender === 'user' ? 'var(--accent-purple)' : 'rgba(255,255,255,0.05)' }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} style={inputFormStyle}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                style={inputStyle}
              />
              <button type="submit" style={sendBtnStyle}>
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Styles
const floatingBtnStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  width: '60px',
  height: '60px',
  borderRadius: '30px',
  backgroundColor: 'var(--accent-purple)',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',
};

const chatWindowStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '100px',
  right: '30px',
  width: '350px',
  height: '500px',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1000,
  overflow: 'hidden',
  boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
  border: '1px solid var(--border-color)',
};

const headerStyle: React.CSSProperties = {
  padding: '16px',
  borderBottom: '1px solid var(--border-color)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.2)',
};

const botAvatarStyle: React.CSSProperties = {
  fontSize: '24px',
};

const headerTitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '16px',
  fontWeight: 600,
  fontFamily: 'var(--font-poppins)',
};

const closeBtnStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: 'var(--text-secondary)',
  cursor: 'pointer',
  fontSize: '16px',
};

const messagesAreaStyle: React.CSSProperties = {
  flexGrow: 1,
  padding: '16px',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const messageRowStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
};

const messageBubbleStyle: React.CSSProperties = {
  padding: '10px 14px',
  borderRadius: '16px',
  maxWidth: '80%',
  fontSize: '14px',
  lineHeight: 1.4,
  fontFamily: 'var(--font-geist-sans)',
};

const inputFormStyle: React.CSSProperties = {
  display: 'flex',
  padding: '16px',
  borderTop: '1px solid var(--border-color)',
  gap: '10px',
  backgroundColor: 'rgba(0,0,0,0.2)',
};

const inputStyle: React.CSSProperties = {
  flexGrow: 1,
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid var(--border-color)',
  borderRadius: '20px',
  padding: '10px 16px',
  color: 'white',
  outline: 'none',
  fontSize: '14px',
};

const sendBtnStyle: React.CSSProperties = {
  background: 'var(--accent-purple)',
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  padding: '0 16px',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '14px',
};
