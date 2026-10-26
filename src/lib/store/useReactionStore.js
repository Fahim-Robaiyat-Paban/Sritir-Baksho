"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useReactionStore = create(
  persist(
    (set) => ({
      reacted: {},
      saved: {},
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
      toggleReaction: (slug) => set((state) => ({ reacted: { ...state.reacted, [slug]: !state.reacted[slug] } })),
      toggleSaved: (slug) => set((state) => ({ saved: { ...state.saved, [slug]: !state.saved[slug] } })),
    }),
    {
      name: "smriti-reactions",
      version: 1,
      skipHydration: true, // rehydrated in an effect so the first client render matches the server
      partialize: (state) => ({ reacted: state.reacted, saved: state.saved }),
      migrate: (persisted) => ({ reacted: persisted?.reacted ?? {}, saved: persisted?.saved ?? {} }),
      onRehydrateStorage: () => (state) => state?.setHasHydrated(true),
    }
  )
);
