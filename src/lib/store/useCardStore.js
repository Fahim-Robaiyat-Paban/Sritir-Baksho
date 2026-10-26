"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultCard } from "@/api/cardOptions";

const sanitize = (card) => {
  const clean = { ...defaultCard };
  Object.keys(defaultCard).forEach((key) => {
    if (typeof card?.[key] === "string") clean[key] = card[key].slice(0, 120);
  });
  return clean;
};

// The card draft survives a refresh, so nobody loses what they typed
export const useCardStore = create(
  persist(
    (set) => ({
      card: defaultCard,
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
      setField: (field, value) => set((state) => ({ card: { ...state.card, [field]: value } })),
      reset: () => set({ card: defaultCard }),
    }),
    {
      name: "smriti-card",
      version: 1,
      skipHydration: true, // rehydrated in an effect so the first client render matches the server
      partialize: (state) => ({ card: state.card }),
      migrate: (persisted) => ({ card: sanitize(persisted?.card) }),
      merge: (persisted, current) => ({ ...current, card: sanitize(persisted?.card) }),
      onRehydrateStorage: () => (state) => state?.setHasHydrated(true),
    }
  )
);
