import ChatContainer from "@/components/chat/ChatContainer";

export default function Home() {
  return (
    <div className="h-screen w-screen flex bg-[#0f172a] text-white">
      <div className="w-[260px] border-r border-gray-800" />
      <ChatContainer />
      <div className="w-[320px] border-l border-gray-800" />
    </div>
  );
}
