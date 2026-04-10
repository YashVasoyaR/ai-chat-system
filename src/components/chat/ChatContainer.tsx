"use client";

import { useChatStore } from "@/store/useChatStore";
import { streamMockResponse } from "@/services/chatService";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import { ChatState } from "@/store/useChatStore";
import { Message } from "@/types/chat";
import MarkdownRenderer from "@/components/chat/MarkdownRenderer";
import TypingIndicator from "@/components/common/TypingIndicator";

export default function ChatContainer() {
  const { messages, addMessage, setLoading, isLoading } = useChatStore();
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: uuidv4(), role: "user", content: input };
    addMessage(userMsg);

    const aiMsg: Message = { id: uuidv4(), role: "assistant", content: "" };
    addMessage(aiMsg);

    setInput("");
    setLoading(true);

    await streamMockResponse(input, (chunk) => {
      useChatStore.setState((state: ChatState) => {
        const updated = [...state.messages];
        updated[updated.length - 1].content = chunk;
        return { messages: updated };
      });
    });

    setLoading(false);
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-4">
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.length === 0 && (
          <div className="h-full flex items-center justify-center text-gray-500">
            Start a conversation
          </div>
        )}
        {messages.length > 0 &&
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-3xl px-4 py-2 rounded-lg ${
                msg.role === "user" ? "bg-blue-600 ml-auto" : "bg-gray-800"
              }`}
            >
              <MarkdownRenderer content={msg.content} />
            </div>
          ))}
        {isLoading && <TypingIndicator />}
      </div>
      <div ref={bottomRef} />
      <div className="flex gap-2 mt-4">
        <textarea
          disabled={isLoading}
          className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 disabled:opacity-50"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="bg-blue-600 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          {isLoading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
