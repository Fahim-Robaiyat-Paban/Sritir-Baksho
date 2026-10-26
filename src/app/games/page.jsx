import { Suspense } from "react";
import Link from "next/link";
import FilterChips from "@/components/ui/FilterChips";
import Polaroid from "@/components/ui/Polaroid";
import GameCard from "@/components/games/GameCard";
import GameSearch from "@/components/games/GameSearch";
import GamesSkeleton, { GameGridSkeleton } from "@/components/games/GamesSkeleton";
import { gameCategories, getGames } from "@/api/games";
import gameMarbles from "@/assets/images/game-marbles.jpg";

export const metadata = {
  title: "খেলার লাইব্রেরি",
  description: "গোল্লাছুট, লাটিম, গুটি, ঘুড়ি থেকে কাগজের নৌকা, বাংলার ঐতিহ্যবাহী শৈশবের খেলাগুলোর নিয়ম আর গল্প।",
  alternates: { canonical: "/games" },
};

const hrefFor = (q) => (id) => {
  const params = new URLSearchParams();
  if (id !== "all") params.set("cat", id);
  if (q) params.set("q", q);
  const search = params.toString();
  return search ? `/games?${search}` : "/games";
};

const GameGrid = async ({ category, q }) => {
  const games = await getGames({ category, q });

  if (games.length === 0) {
    return (
      <div className="paper mt-6 px-6 py-12 text-center">
        <p className="font-display text-2xl font-bold text-leaf">এই নামে কোনো খেলা পাওয়া যায়নি</p>
        <p className="mt-1 text-ink-2">বানানটা আরেকবার দেখুন, বা সব খেলা থেকে খুঁজুন।</p>
        <Link href="/games" className="mt-4 inline-flex min-h-11 items-center font-semibold text-leaf underline underline-offset-4">
          সব খেলা দেখুন
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      {games.map((game) => (
        <GameCard key={game.slug} game={game} />
      ))}
    </div>
  );
};

const GameResults = async ({ searchParams }) => {
  const { cat, q = "" } = await searchParams;
  const category = gameCategories.some((item) => item.id === cat) ? cat : "all";

  return (
    <>
      <div className="mt-7">
        <FilterChips label="খেলার ধরন" items={gameCategories} active={category} hrefFor={hrefFor(q)} variant="tab" />
      </div>
      <div className="mt-4">
        <GameSearch key={category} category={category} initialQuery={q} />
      </div>
      <Suspense key={`${category}-${q}`} fallback={<GameGridSkeleton />}>
        <GameGrid category={category} q={q} />
      </Suspense>
    </>
  );
};

const GamesPage = ({ searchParams }) => {
  return (
    <div className="site-container px-5 sm:px-8 xl:px-0">
      {/* Card-catalog drawer front: oak, a brass label holder and a pull handle */}
      <header className="relative grid items-center gap-6 rounded-md bg-[#8a5a2f] px-6 py-8 shadow-[inset_0_0_0_6px_#7a4e27,inset_0_0_30px_rgb(0_0_0/0.35),0_18px_30px_-16px_rgb(40_20_5/0.7)] [background-image:repeating-linear-gradient(91deg,rgb(0_0_0/0.07)_0_2px,transparent_2px_12px),linear-gradient(180deg,#9a6636,#7a4e27)] md:grid-cols-[1fr_280px] md:px-10">
        <div>
          <div className="relative w-fit rounded-sm border-[3px] border-[#c99a4a] bg-[#f6ead0] px-6 py-3 shadow-[inset_0_0_0_2px_#f6ead0,inset_0_0_0_3px_rgb(138_90_47/0.3),0_4px_8px_-3px_rgb(0_0_0/0.5)]">
            <span aria-hidden="true" className="absolute top-1/2 -left-2.5 size-3 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#f3dc9a,#9a7330)]" />
            <span aria-hidden="true" className="absolute top-1/2 -right-2.5 size-3 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#f3dc9a,#9a7330)]" />
            <p className="font-display text-sm font-bold text-ink-3">ঐতিহ্যের খেলা, আজও প্রাণে</p>
            <h1 className="font-display text-[38px] leading-tight font-extrabold text-leaf md:text-6xl">খেলার লাইব্রেরি</h1>
          </div>
          <p className="mt-5 max-w-md text-[#f3e3c3] md:text-lg">যে খেলাগুলো আমাদের শৈশবকে রঙিন করেছে, নিয়ম আর গল্পসহ এক জায়গায়।</p>
          <span aria-hidden="true" className="mt-5 block h-4 w-28 rounded-full bg-[linear-gradient(#f3dc9a,#b8893a_60%,#7a5a22)] shadow-[0_3px_5px_rgb(0_0_0/0.45)]" />
        </div>
        <div className="relative hidden md:block">
          <Polaroid image={gameMarbles} alt="মাটিতে কাচের মার্বেল" sizes="260px" className="w-[240px] rotate-3" priority />
          <p className="absolute -right-2 -bottom-4 w-28 -rotate-6 bg-marker/90 p-2.5 font-hand text-[15px] leading-snug text-ink">খেলাধুলা মানেই শৈশব</p>
        </div>
      </header>

      <Suspense fallback={<GamesSkeleton />}>
        <GameResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default GamesPage;
