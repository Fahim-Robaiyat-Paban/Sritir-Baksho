"use client";
import { useEffect } from "react";

// Persisted stores skip automatic hydration; call this once in the component that reads them
export const useRehydrate = (store) => {
  useEffect(() => {
    store.persist.rehydrate();
  }, [store]);
};
