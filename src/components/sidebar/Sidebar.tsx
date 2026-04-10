"use client";

import { useChatStore } from "@/store/useChatStore";
import ChatHistoryItem from "@/components/sidebar/ChatHistoryItem";

export default function Sidebar() {
  const { reset, messages } = useChatStore();

  return (
    <div className="w-[260px] bg-[#020617] border-r border-gray-800 flex flex-col">
      {/* Top - New Chat */}
      <div className="p-3">
        <button
          onClick={reset}
          className="w-full bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg text-sm"
        >
          + New Chat
        </button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1">
        {messages.length === 0 && (
          <p className="text-gray-500 text-sm px-2">No conversations</p>
        )}

        {messages.map((msg) => (
          <ChatHistoryItem key={msg.id} message={msg} />
        ))}
      </div>

      {/* Bottom */}
      <div className="p-3 border-t border-gray-800 text-xs text-gray-400">
        AI Chat System
      </div>
    </div>
  );
}
