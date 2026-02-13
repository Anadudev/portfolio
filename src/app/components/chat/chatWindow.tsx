"use client";
import React, { useEffect, useRef } from "react";
import { Bot, SendHorizontal, Sparkles, X, Loader2, Copy } from "lucide-react";
import clsx from "clsx";
import { axiosOpenRouter } from "@/config/axios.apoenrouter";
import { context } from "@/app/data/ai/context";
import { useMutation } from "@tanstack/react-query";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatWindow = () => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I can help you learn more about Anadu's work. What would you like to know?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
  }, [messages, open]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const mutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const response = await axiosOpenRouter.post("/api/v1/chat/completions", {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `Use the following context to answer the user's questions about Anadu: ${context}`,
          },
          ...messages,
          { role: "user", content: userMessage },
        ],
      });
      return response.data.choices[0].message.content;
    },
    onSuccess: (data) => {
      setMessages((prev) => [...prev, { role: "assistant", content: data }]);
    },
    onError: (error) => {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ]);
    },
  });

  const handleSendMessage = () => {
    if (!inputValue.trim() || mutation.isPending) return;

    const userMessage = inputValue.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInputValue("");
    mutation.mutate(userMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyText = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Text copied to clipboard");
      })
      .catch((err) => {
        toast.error("Failed to copy text");
      });
  };

  // Example usage:
  copyText("Hello, world!");

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-10 sm:right-10 z-50">
      {open && (
        <div
          className="absolute bg-black bottom-0 right-0 w-[calc(100vw-2rem)] h-[calc(100vh-10rem)] sm:w-[380px] sm:h-[580px] border border-border-gray/50 rounded-2xl flex flex-col shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right scale-100 opacity-100"
          data-purpose="chat-ui"
          id="chat-window"
        >
          {/* Header */}
          <div className="p-5 border-b border-border-gray flex items-center justify-between bg-accent-gray/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Bot size={28} strokeWidth={2.5} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight">
                  AI Assistant
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-[10px] text-text-secondary uppercase tracking-wider font-semibold">
                    Online
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={toggleOpen}
              className="cursor-pointer hover:bg-white/10 p-1 rounded-full transition-colors"
            >
              <X
                className="text-zinc-500 hover:text-red-500"
                size={20}
                strokeWidth={2.5}
              />
            </button>
          </div>

          {/* Messages Area */}
          <div
            className="flex-1 overflow-y-auto p-5 space-y-6 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-zinc-900/20 to-transparent"
            id="chat-messages"
          >
            {messages.map((message, index) =>
              message.role === "assistant" ? (
                <div key={index} className="flex flex-col gap-2 max-w-[85%]">
                  <div className="text-[11px] text-text-secondary font-bold uppercase tracking-widest pl-1">
                    AI Assistant
                  </div>
                  <div className="bg-accent-gray border border-border-gray p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed text-zinc-200">
                    <Markdown remarkPlugins={[remarkGfm]}>
                      {message.content}
                    </Markdown>
                  </div>
                  <Copy
                    onClick={() => copyText(message.content)}
                    className="cursor-pointer"
                    size={15}
                  />
                </div>
              ) : (
                <div
                  key={index}
                  className="flex flex-col gap-2 ml-auto max-w-[85%] items-end"
                >
                  <div className="text-[11px] text-text-secondary font-bold uppercase tracking-widest pr-1">
                    Guest
                  </div>
                  <div className="bg-white text-black p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed font-medium">
                    <Markdown remarkPlugins={[remarkGfm]}>
                      {message.content}
                    </Markdown>
                  </div>
                  <Copy
                    onClick={() => copyText(message.content)}
                    className="cursor-pointer"
                    size={15}
                  />
                </div>
              ),
            )}

            {mutation.isPending && (
              <div className="flex flex-col gap-2 max-w-[85%] animate-pulse">
                <div className="text-[11px] text-text-secondary font-bold uppercase tracking-widest pl-1">
                  AI Assistant
                </div>
                <div className="bg-accent-gray border border-border-gray p-4 rounded-2xl rounded-tl-none text-sm text-zinc-400 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border-gray bg-dark-bg">
            <div className="relative" id="chat-form">
              <input
                className="w-full bg-accent-gray border border-border-gray rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-1 focus:ring-white focus:border-white transition-all outline-none text-white placeholder:text-zinc-600 disabled:opacity-50"
                placeholder="Type your question..."
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={mutation.isPending}
                autoFocus
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || mutation.isPending}
                className="absolute right-2 top-1.5 w-9 h-9 bg-white rounded-lg flex items-center justify-center hover:bg-zinc-200 transition-colors cursor-pointer disabled:bg-zinc-600 disabled:cursor-not-allowed"
              >
                {mutation.isPending ? (
                  <Loader2
                    className="text-black animate-spin"
                    size={20}
                    strokeWidth={2.5}
                  />
                ) : (
                  <SendHorizontal
                    className="text-black"
                    size={20}
                    strokeWidth={2.5}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      {!open && (
        <button
          onClick={toggleOpen}
          className={clsx(
            "w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-zinc-200 transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer",
            {
              "animate-pulse": !open,
            },
          )}
        >
          <Sparkles className="text-black" size={24} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
};

export default ChatWindow;
