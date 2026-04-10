import ChatContainer from "@/components/chat/ChatContainer";
import Sidebar from "@/components/sidebar/Sidebar";
import ControlsPanel from "@/components/controls/ControlsPanel";

export default function Home() {
  return (
    <div className="h-screen w-screen flex bg-[#0f172a] text-white">
      <Sidebar />
      <ChatContainer />
      <ControlsPanel />
    </div>
  );
}
