import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Command, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { ChatMessage } from "../types";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      text: "Hello! I am the Kearny Legion virtual assistant. Ask me anything about our membership eligibility, upcoming veterans events, youth scholarships, or leadership on post!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "How do I join the Legion?",
    "What are the eligibility requirements?",
    "Who is the Post Commander?",
    "Do you offer free VA Help?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);
    setApiError(null);

    try {
      // Map history to simple role/text format for the API
      const apiHistory = messages.map((m) => ({
        role: m.role,
        text: m.text
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: apiHistory
        })
      });

      if (!response.ok) {
        throw new Error("Failed to reach server");
      }

      const data = await response.json();
      
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        role: "model",
        text: data.reply,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error("Chat error:", err);
      setApiError("I am having trouble connecting to Kearny's server right now. Please call us at 201-889-8759!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          id="chat-toggle-btn"
          className="relative group bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 border border-amber-300/30 flex items-center justify-center"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 block w-3 h-3 rounded-full bg-red-600 border-2 border-slate-900 group-hover:scale-125 transition-transform"></span>
          <div className="absolute right-14 bg-slate-900/90 text-[#cfaf6e] text-xs py-1 px-2.5 rounded border border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            Kearny Vet Assistant
          </div>
        </button>
      )}

      {/* Chat Windows Dialog */}
      {isOpen && (
        <div 
          id="chat-window-container"
          className="w-80 sm:w-96 h-[500px] bg-slate-950 border border-amber-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in font-sans"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-950 to-slate-900 py-3.5 px-4 border-b border-amber-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs">
                🇺🇸
              </div>
              <div>
                <h4 className="text-white text-sm font-bold tracking-tight">Kearny Legion Assistant</h4>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] text-green-400 font-medium">Online Helper</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 px-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Listing */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-950/70">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col max-w-[85%] ${
                  m.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                <div
                  className={`px-3 py-2 text-xs rounded-xl leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-amber-400 text-slate-950 font-medium rounded-tr-none"
                      : "bg-slate-900 text-slate-200 border border-white/5 rounded-tl-none"
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-slate-500 mt-1 px-1">
                  {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}

            {/* Loading / Typing indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 mr-auto bg-slate-900 border border-white/5 py-2 px-3 rounded-xl rounded-tl-none max-w-[80%]">
                <Loader2 className="w-3.5 h-3.5 text-amber-500 animate-spin" />
                <span className="text-xs text-slate-400">GenAI is spelling output...</span>
              </div>
            )}

            {/* Error view */}
            {apiError && (
              <div className="flex items-start gap-2 bg-red-950/30 border border-red-500/20 p-2.5 rounded-lg text-xs text-red-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                <span>{apiError}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions suggestion pills */}
          {messages.length === 1 && (
            <div className="p-3 bg-slate-950 border-t border-white/5 flex flex-wrap gap-1.5">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSendMessage(q)}
                  className="bg-white/5 hover:bg-amber-400/10 hover:text-amber-400 border border-white/10 rounded-full py-1 px-2.5 text-[10px] text-slate-300 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Panel */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-3 bg-slate-900 border-t border-amber-500/20 flex gap-1.5"
          >
            <input
              type="text"
              placeholder="Type your veterans/post query..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-slate-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 p-2 rounded-lg font-bold transition-all disabled:opacity-50 hover:scale-105"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
