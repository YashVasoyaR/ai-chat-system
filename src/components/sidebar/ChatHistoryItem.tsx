import { Message } from "@/types/chat";

export default function ChatHistoryItem({ message }: { message: Message }) {
  return (
    <div className="px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer text-sm truncate">
      {message.content || "New Chat"}
    </div>
  );
}
