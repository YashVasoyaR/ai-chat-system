"use client";

import { useChatStore } from "@/store/useChatStore";

export default function TemperatureSlider() {
  const { settings, updateSettings } = useChatStore();

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-400">
        <span>Temperature</span>
        <span>{settings.temperature}</span>
      </div>

      <input
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={settings.temperature}
        onChange={(e) =>
          updateSettings({ temperature: Number(e.target.value) })
        }
        className="w-full"
      />
    </div>
  );
}
