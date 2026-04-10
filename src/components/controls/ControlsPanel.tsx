"use client";

import ModelSelector from "@/components/controls/ModelSelector";
import TemperatureSlider from "@/components/controls/TemperatureSlider";
import TokenInput from "@/components/controls/TokenInput";
import SystemPrompt from "@/components/controls/SystemPrompt";

export default function ControlsPanel() {
  return (
    <div className="w-[320px] bg-[#020617] border-l border-gray-800 p-4 space-y-6">
      <h2 className="text-sm text-gray-400">Settings</h2>

      <ModelSelector />
      <TemperatureSlider />
      <TokenInput />
      <SystemPrompt />

      {/* Debug Panel */}
      <div className="bg-gray-900 p-3 rounded-md text-xs text-gray-400 space-y-1">
        <p>Status: Ready</p>
        <p>Tokens: ~120</p>
        <p>Response Time: 0.8s</p>
      </div>
    </div>
  );
}
