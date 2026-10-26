import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flower2 } from "lucide-react";
import CategoryTile from "@/components/stories/CategoryTile";
import StoryCard from "@/components/stories/StoryCard";
import FilterChips from "@/components/ui/FilterChips";
import Tape from "@/components/ui/Tape";
import Skeleton from "@/components/ui/Skeleton";
import { buttonClass } from "@/components/ui/Button";
import { divisions, getDivisionCounts, getStories, storyCategories } from "@/api/stories";
import { toBn } from "@/lib/utils/format";
import mapDivisions from "@/assets/images/map-divisions.jpg";

export const metadata = {
  title: "স্মৃতির ভাণ্ডার",
  description: "ছোট ছোট ঘটনা, বড় বড় অনুভূতি। খেলা, স্কুল, বৃষ্টি আর বন্ধুদের নিয়ে মানুষের শৈশবের গল্প পড়ুন।",
  alternates: { canonical: "/stories" },
};

const categoryChips = [{ id: "", label: "সব গল্প" }, ...storyCategories.map(({ id, label }) => ({ id, label }))];

const StoriesSkeleton = () => (
  <div role="status" aria-busy="true" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <span className="sr-only">গল্পগুলো লোড হচ্ছে</span>
    {["s1", "s2", "s3", "s4"].map((id) => (
      <Skeleton key={id} className="aspect-[4/5]" />
    ))}
  </div>
);

const StoryResults = async ({ searchParams }) => {
  const { cat = "", division = "" } = await searchParams;
  const category = storyCategories.some((item) => item.id === cat) ? cat : "";
  const area = divisions.some((item) => item.id === division) ? division : "";
  const stories = await getStories({ category, division: area });
  const [featured, ...rest] = stories;
  const areaLabel = divisions.find((item) => item.id === area)?.label;

  const hrefFor = (id) => {
    const params = new URLSearchParams();
    if (id) params.set("cat", id);
    if (area) params.set("division", area);
    const search = params.toString();
    return search ? `/stories?${search}` : "/stories";
  };

  return (
    <>
      <div className="mt-6">
        <FilterChips label="গল্পের বিষয়" items={categoryChips} active={category} hrefFor={hrefFor} />
      </div>
      {areaLabel && (
        <p className="mt-3 text-[15px] text-ink-2">
          {areaLabel} বিভাগের গল্প দেখাচ্ছে ·{" "}
          <Link href={category ? `/stories?cat=${category}` : "/stories"} scroll={false} className="font-semibold text-leaf underline underline-offset-4">
            সব বিভাগ
          </Link>
        </p>
      )}

      {!featured ? (
        <div className="paper mt-6 px-6 py-12 text-center">
          <p className="font-display text-2xl font-bold text-leaf">এখানে এখনো কোনো গল্প নেই</p>
          <p className="mt-1 text-ink-2">প্রথম গল্পটা হয়তো আপনারই হবে। আপাতত অন্য বিষয়গুলো ঘুরে দেখুন।</p>
          <Link href="/stories" className="mt-4 inline-flex min-h-11 items-center font-semibold text-leaf underline underline-offset-4">
            সব গল্প দেখুন
          </Link>
        </div>
      ) : (
        <>
          {/* The featured story as an open letter: ruled sheet, photo taped to it, a postmark in the corner */}
          <article className="relative mt-8 grid items-center gap-7 bg-[#fffaf0] p-5 shadow-[0_18px_30px_-18px_rgb(60_40_10/0.6)] [background-image:linear-gradient(90deg,transparent_34px,rgb(196_35_44/0.25)_34px_35px,transparent_35px),repeating-linear-gradient(transparent_0_31px,rgb(43_74_139/0.09)_31px_32px),var(--grain)] md:grid-cols-[300px_1fr] md:p-8">
            <div className="relative -rotate-3 bg-white p-2 pb-6 shadow-[0_12px_22px_-10px_rgb(60_40_10/0.55)]">
              <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-6" />
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 768px) 90vw, 300px" placeholder="blur" className="object-cover" />
              </div>
            </div>
            <div className="md:pr-36">
              <p className="font-hand text-lg text-ink-blue">প্রিয় পাঠক,</p>
              <h2 className="mt-1 font-display text-2xl leading-snug font-bold text-leaf md:text-3xl">{featured.title}</h2>
              <p className="mt-2 font-hand text-[18px] leading-relaxed text-ink-blue">{featured.excerpt}</p>
              <Link href={`/stories/${featured.slug}`} className={buttonClass({ variant: "green", size: "sm", className: "mt-5" })}>
                পুরো চিঠিটা পড়ুন
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <p className="absolute top-6 right-6 hidden size-24 rotate-12 place-items-center rounded-full border-[3px] border-double border-brick/60 text-center font-display text-xs leading-tight font-bold text-brick/70 lg:grid">
              ফিচার্ড<br />স্টোরি<br />{featured.date}
            </p>
          </article>

          {rest.length > 0 && (
            <section aria-labelledby="latest" className="mt-12">
              <h2 id="latest" className="flex items-center gap-3 font-display text-2xl font-extrabold text-leaf">
                <Flower2 aria-hidden="true" className="size-5 text-brick" />
                নতুন স্মৃতিচারণ
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {rest.map((story) => (
                  <StoryCard key={story.slug} story={story} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

const postmarkTilts = ["-rotate-6", "rotate-3", "-rotate-2", "rotate-6"];

// Divisions as round post-office postmarks stamped onto kraft paper
const DivisionStrip = async () => {
  const counts = await getDivisionCounts();
  return (
    <section aria-labelledby="divisions" className="mt-14 grid items-center gap-6 rounded-sm bg-[#d8b98a] p-5 shadow-[0_16px_28px_-18px_rgb(60_40_10/0.7)] [background-image:linear-gradient(135deg,rgb(255_255_255/0.18),transparent_50%,rgb(0_0_0/0.08)),var(--grain)] md:grid-cols-[150px_1fr] md:p-8">
      <Image src={mapDivisions} alt="বাংলাদেশের আটটি বিভাগের মানচিত্র" className="mx-auto w-28 -rotate-3 border-4 border-white shadow-[0_8px_14px_-8px_rgb(0_0_0/0.5)] md:w-full" />
      <div>
        <h2 id="divisions" className="font-display text-2xl font-extrabold text-ink">বিভাগ অনুযায়ী গল্প</h2>
        <p className="text-sm text-ink-2">কোন ডাকঘর থেকে এসেছে চিঠিগুলো?</p>
        <ul className="mt-5 grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-4">
          {counts.map((division, i) => (
            <li key={division.id}>
              <Link
                href={`/stories?division=${division.id}`}
                scroll={false}
                className={`grid size-28 place-items-center rounded-full border-[3px] border-double border-ink-blue/70 text-center text-ink-blue transition-transform hover:scale-105 hover:border-brick hover:text-brick ${postmarkTilts[i % postmarkTilts.length]}`}
              >
                <span>
                  <span className="block font-display text-lg leading-tight font-extrabold">{division.label}</span>
                  <span className="block text-[11px] font-semibold">{toBn(division.count)}টি গল্প</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const StoriesPage = ({ searchParams }) => {
  return (
    <div className="site-container px-5 sm:px-8 xl:px-0">
      <header className="pt-4 text-center">
        <h1 className="font-display text-[42px] leading-tight font-extrabold text-leaf md:text-6xl">
          <span className="brush">স্মৃতির ভাণ্ডার</span>
        </h1>
        <p className="mt-2 font-display text-xl font-bold text-ink md:text-2xl">ছোট ছোট ঘটনা, বড় বড় অনুভূতি</p>
        <p className="mt-1 text-ink-2">পড়ুন, শেয়ার করুন, আবার বাঁচুন আমাদের শৈশব।</p>
      </header>

      <div className="-mx-5 mt-8 grid auto-cols-[58%] grid-flow-col gap-4 overflow-x-auto px-5 py-2 [scrollbar-width:none] sm:mx-0 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-3 sm:px-0 lg:grid-cols-5 lg:gap-5">
        {storyCategories.map((category) => (
          <CategoryTile key={category.id} category={category} />
        ))}
      </div>

      <Suspense fallback={<StoriesSkeleton />}>
        <StoryResults searchParams={searchParams} />
      </Suspense>

      <DivisionStrip />
    </div>
  );
};

export default StoriesPage;
