"use client";
import { Bookmark, Heart } from "lucide-react";
import { useReactionStore } from "@/lib/store/useReactionStore";
import { useRehydrate } from "@/lib/store/useRehydrate";
import { toBnCount } from "@/lib/utils/format";

const StoryActions = ({ slug, baseCount }) => {
  useRehydrate(useReactionStore);
  const hasHydrated = useReactionStore((state) => state.hasHydrated);
  const reacted = useReactionStore((state) => Boolean(state.reacted[slug]));
  const saved = useReactionStore((state) => Boolean(state.saved[slug]));
  const toggleReaction = useReactionStore((state) => state.toggleReaction);
  const toggleSaved = useReactionStore((state) => state.toggleSaved);

  const isReacted = hasHydrated && reacted;
  const isSaved = hasHydrated && saved;

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <button
        type="button"
        aria-pressed={isReacted}
        onClick={() => toggleReaction(slug)}
        className={`inline-flex h-12 items-center gap-2.5 rounded-full px-6 font-bold transition-colors ${isReacted ? "bg-brick text-white" : "bg-brick/10 text-brick ring-[1.5px] ring-brick ring-inset"}`}
      >
        <Heart aria-hidden="true" className={`size-5 ${isReacted ? "fill-current" : ""}`} />
        আমারও এমন ছিল
      </button>
      <span className="flex items-center gap-1.5 text-[15px] font-semibold text-ink-2" aria-live="polite">
        <Heart aria-hidden="true" className="size-4 text-brick" />
        {toBnCount(baseCount + (isReacted ? 1 : 0))} জন
      </span>
      <button
        type="button"
        aria-pressed={isSaved}
        aria-label={isSaved ? "সেভ থেকে সরান" : "গল্পটা সেভ করুন"}
        onClick={() => toggleSaved(slug)}
        className="grid size-11 place-items-center rounded-full text-leaf hover:bg-paper-2"
      >
        <Bookmark aria-hidden="true" className={`size-5 ${isSaved ? "fill-current" : ""}`} />
      </button>
    </div>
  );
};

export default StoryActions;
