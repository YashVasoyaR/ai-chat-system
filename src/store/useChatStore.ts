import { create } from "zustand";
import { Message, ChatSettings } from "@/types/chat";

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  settings: ChatSettings;

  addMessage: (msg: Message) => void;
  setLoading: (val: boolean) => void;
  setError: (err: string | null) => void;
  updateSettings: (settings: Partial<ChatSettings>) => void;
  reset: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isLoading: false,
  error: null,
  settings: {
    model: "gpt-4",
    temperature: 0.7,
    maxTokens: 500,
    systemPrompt: "",
  },

  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),

  setLoading: (val) => set({ isLoading: val }),
  setError: (err) => set({ error: err }),

  updateSettings: (settings) =>
    set((state) => ({
      settings: { ...state.settings, ...settings },
    })),

  reset: () => set({ messages: [], error: null }),
}));
