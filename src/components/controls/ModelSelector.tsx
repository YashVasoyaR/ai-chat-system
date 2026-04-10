"use client";

import { useChatStore } from "@/store/useChatStore";

export default function ModelSelector() {
  const { settings, updateSettings } = useChatStore();

  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-400">Model</label>
      <select
        value={settings.model}
        onChange={(e) => updateSettings({ model: e.target.value })}
        className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2"
      >
        <option value="gpt-4">GPT-4</option>
        <option value="gpt-3.5">GPT-3.5</option>
      </select>
    </div>
  );
}
