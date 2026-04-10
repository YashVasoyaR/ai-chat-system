"use client";

import { useChatStore } from "@/store/useChatStore";

export default function TokenInput() {
  const { settings, updateSettings } = useChatStore();

  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-400">Max Tokens</label>
      <input
        type="number"
        value={settings.maxTokens}
        onChange={(e) => updateSettings({ maxTokens: Number(e.target.value) })}
        className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2"
      />
    </div>
  );
}
