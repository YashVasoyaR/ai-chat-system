"use client";

import { useChatStore } from "@/store/useChatStore";
import { streamMockResponse } from "@/services/chatService";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { ChatState } from "@/store/useChatStore";
import { Message } from "@/types/chat";

export default function ChatContainer() {
  const { messages, addMessage, setLoading, isLoading } = useChatStore();
  const [input, setInput] = useState("");

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
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xl px-4 py-2 rounded-lg ${
              msg.role === "user" ? "bg-blue-600 ml-auto" : "bg-gray-800"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <textarea
          className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
