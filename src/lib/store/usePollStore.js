"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePollStore = create(
  persist(
    (set) => ({
      votes: {},
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
      vote: (pollId, optionId) => set((state) => ({ votes: { ...state.votes, [pollId]: optionId } })),
    }),
    {
      name: "smriti-poll",
      version: 1,
      skipHydration: true, // rehydrated in an effect so the first client render matches the server
      partialize: (state) => ({ votes: state.votes }),
      migrate: (persisted) => ({ votes: typeof persisted?.votes === "object" && persisted.votes ? persisted.votes : {} }),
      onRehydrateStorage: () => (state) => state?.setHasHydrated(true),
    }
  )
);
