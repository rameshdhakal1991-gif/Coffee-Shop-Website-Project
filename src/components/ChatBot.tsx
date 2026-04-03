import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Coffee, User } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm Brewie, your Brew Haven assistant. How can I help you today?", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Simple bot response simulation
    setTimeout(() => {
      let botText = "That's a great question! Let me check that for you.";
      if (input.toLowerCase().includes('menu')) botText = "You can find our full menu in the Menu section. Our Signature Espresso is a fan favorite!";
      if (input.toLowerCase().includes('hours')) botText = "We are open Mon-Fri 7am-9pm and Sat-Sun 8am-10pm.";
      if (input.toLowerCase().includes('reserve')) botText = "You can book a table directly on our Reservations page!";

      setMessages((prev) => [...prev, { id: Date.now() + 1, text: botText, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-white dark:bg-neutral-900 rounded-[32px] shadow-2xl border border-neutral-100 dark:border-neutral-800 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-amber-700 p-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Coffee size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Brewie</h4>
                  <p className="text-xs text-white/70">Always online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 h-[400px] overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-amber-700' : 'bg-neutral-100 dark:bg-neutral-800'}`}>
                      {msg.sender === 'user' ? <User size={14} className="text-white" /> : <Coffee size={14} className="text-amber-700" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-amber-700 text-white rounded-tr-none' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-tl-none'}`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-6 border-t dark:border-neutral-800 flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-700 transition-all dark:text-white"
              />
              <button type="submit" className="p-3 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition-all active:scale-90">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-amber-700 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-amber-800 transition-all relative"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white dark:border-neutral-900 rounded-full" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
