import { Suspense } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import GameCard from "@/components/games/GameCard";
import StoryCard from "@/components/stories/StoryCard";
import Skeleton from "@/components/ui/Skeleton";
import SectionTitle from "@/components/ui/SectionTitle";
import Tape from "@/components/ui/Tape";
import { buttonClass } from "@/components/ui/Button";
import { getGames } from "@/api/games";
import { getStories } from "@/api/stories";

export const metadata = {
  title: "খুঁজুন",
  description: "স্মৃতির বাক্সে খেলা আর গল্প খুঁজুন।",
  alternates: { canonical: "/search" },
  robots: { index: false },
};

const SearchSkeleton = () => (
  <div role="status" aria-busy="true" className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
    <span className="sr-only">খোঁজা হচ্ছে</span>
    {["r1", "r2", "r3", "r4"].map((id) => (
      <Skeleton key={id} className="aspect-[4/5]" />
    ))}
  </div>
);

const Results = async ({ searchParams }) => {
  const { q = "" } = await searchParams;
  const query = q.trim();

  if (!query) {
    return <p className="mt-8 text-center text-ink-2">একটা খেলা বা গল্পের নাম লিখে খুঁজুন।</p>;
  }

  const [games, stories] = await Promise.all([getGames({ q: query }), getStories()]);
  const matchedStories = stories.filter((story) => story.title.includes(query) || story.excerpt.includes(query));

  if (games.length === 0 && matchedStories.length === 0) {
    return (
      <div className="paper mt-8 px-6 py-12 text-center">
        <p className="font-display text-2xl font-bold text-leaf">“{query}” দিয়ে কিছু পাওয়া যায়নি</p>
        <p className="mt-1 text-ink-2">অন্য কোনো শব্দ দিয়ে চেষ্টা করুন, বা সরাসরি ঘুরে দেখুন।</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/games" className={buttonClass({ variant: "green", size: "sm" })}>সব খেলা</Link>
          <Link href="/stories" className={buttonClass({ variant: "line", size: "sm" })}>সব গল্প</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {games.length > 0 && (
        <section aria-labelledby="game-results" className="mt-10">
          <SectionTitle id="game-results" flowers="left" className="text-2xl md:text-2xl">খেলা</SectionTitle>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>
      )}
      {matchedStories.length > 0 && (
        <section aria-labelledby="story-results" className="mt-10">
          <SectionTitle id="story-results" flowers="left" className="text-2xl md:text-2xl">গল্প</SectionTitle>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {matchedStories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

const QueryField = async ({ searchParams }) => {
  const { q = "" } = await searchParams;
  return (
    // A torn chit of ruled paper: write what you're looking for on the line
    <form action="/search" role="search" className="relative mx-auto mt-6 flex h-16 max-w-xl -rotate-1 items-center gap-3 bg-[#fffaf0] px-5 shadow-[0_12px_22px_-12px_rgb(60_40_10/0.55)] [background-image:linear-gradient(90deg,transparent_34px,rgb(196_35_44/0.3)_34px_35px,transparent_35px),var(--grain)] focus-within:-rotate-0">
      <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-2" />
      <Search aria-hidden="true" className="size-5 shrink-0 text-ink-2" />
      <label htmlFor="search-page" className="sr-only">খুঁজুন</label>
      <input id="search-page" name="q" type="search" defaultValue={q} placeholder="খেলা, গল্প…" className="h-10 w-full border-b-2 border-dotted border-[#9fb3d1] bg-transparent pl-3 font-hand text-xl text-ink-blue outline-none placeholder:font-body placeholder:text-lg placeholder:text-ink-3 focus:border-leaf" />
    </form>
  );
};

const SearchPage = ({ searchParams }) => {
  return (
    <div className="site-container px-5 sm:px-8 xl:px-0">
      <h1 className="pt-4 text-center font-display text-[38px] leading-tight font-extrabold text-leaf md:text-5xl">
        <span className="brush">খুঁজুন</span>
      </h1>
      <Suspense fallback={<Skeleton className="mx-auto mt-6 h-16 max-w-xl rounded-none" />}>
        <QueryField searchParams={searchParams} />
      </Suspense>
      <Suspense fallback={<SearchSkeleton />}>
        <Results searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default SearchPage;
