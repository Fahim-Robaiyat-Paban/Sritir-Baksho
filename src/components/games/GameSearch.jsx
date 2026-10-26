"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Search } from "lucide-react";

// Debounced search that writes ?q= into the URL, keeping the active category
const GameSearch = ({ category, initialQuery }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(initialQuery);

  useEffect(() => {
    const query = value.trim();
    if (query === initialQuery) return undefined;
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      if (category !== "all") params.set("cat", category);
      if (query) params.set("q", query);
      const search = params.toString();
      router.replace(search ? `${pathname}?${search}` : pathname, { scroll: false });
    }, 300);
    return () => clearTimeout(timer);
  }, [value, category, initialQuery, pathname, router]);

  return (
    // A library call slip: label stamped on the left, write the game's name on the line
    <div className="flex h-12 items-center gap-3 border-2 border-dashed border-[#b89a62] bg-[#fbf4e2] pr-4 focus-within:border-leaf">
      <span className="flex h-full shrink-0 items-center gap-2 bg-leaf px-4 text-sm font-bold text-white">
        <Search aria-hidden="true" className="size-4" />
        খুঁজুন
      </span>
      <label htmlFor="game-search" className="sr-only">খেলা খুঁজুন</label>
      <input
        id="game-search"
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="কোন খেলা খুঁজছেন?"
        className="w-full bg-transparent font-hand text-lg text-ink-blue outline-none placeholder:font-body placeholder:text-base placeholder:text-ink-3"
      />
    </div>
  );
};

export default GameSearch;
