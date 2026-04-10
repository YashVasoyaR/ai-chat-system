"use client";

import { useChatStore } from "@/store/useChatStore";

export default function SystemPrompt() {
  const { settings, updateSettings } = useChatStore();

  const handleReset = () => {
    updateSettings({ systemPrompt: "" });
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-400">
        <span>System Prompt</span>
        <button
          onClick={handleReset}
          className="text-xs text-blue-500 hover:underline"
        >
          Reset
        </button>
      </div>

      <textarea
        value={settings.systemPrompt}
        onChange={(e) => updateSettings({ systemPrompt: e.target.value })}
        className="w-full h-[100px] bg-gray-900 border border-gray-700 rounded-md px-3 py-2"
      />
    </div>
  );
}
