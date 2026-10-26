import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Flag, House, Heart, MapPin, Sun } from "lucide-react";
import StoryActions from "@/components/stories/StoryActions";
import StoryCard from "@/components/stories/StoryCard";
import Scrap from "@/components/ui/Scrap";
import SectionTitle from "@/components/ui/SectionTitle";
import Tape from "@/components/ui/Tape";
import { getStory, getStoryCategoryLabel, getStorySlugs } from "@/api/stories";
import { toBn } from "@/lib/utils/format";

export const generateStaticParams = () => getStorySlugs().map((slug) => ({ slug }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const story = await getStory(slug);
  if (!story) return { title: "গল্প পাওয়া যায়নি" };
  return {
    title: story.title,
    description: story.excerpt,
    alternates: { canonical: `/stories/${slug}` },
    openGraph: { title: story.title, description: story.excerpt, type: "article", images: [story.image.src] },
  };
};

const StoryPage = async ({ params }) => {
  const { slug } = await params;
  const story = await getStory(slug);
  if (!story) notFound();

  const facts = [
    { id: "place", icon: MapPin, label: "স্থান", value: story.facts.place },
    { id: "years", icon: CalendarDays, label: "সময়", value: story.facts.years },
    { id: "games", icon: Flag, label: "খেলা", value: story.facts.games },
    { id: "season", icon: Sun, label: "মৌসুম", value: story.facts.season },
    { id: "author", icon: Heart, label: "লিখেছেন", value: story.author },
  ];

  return (
    <div className="site-container px-5 sm:px-8 xl:px-0">
      <nav aria-label="ব্রেডক্রাম্ব" className="flex flex-wrap items-center gap-x-2 text-sm text-ink-3">
        <Link href="/" className="inline-flex min-h-11 items-center gap-1 hover:text-leaf">
          <House aria-hidden="true" className="size-3.5" />
          হোম
        </Link>
        <span aria-hidden="true">›</span>
        <Link href="/stories" className="inline-flex min-h-11 items-center hover:text-leaf">স্মৃতিচারণ</Link>
        <span aria-hidden="true">›</span>
        <span className="text-ink-2">{story.title}</span>
      </nav>

      <div className="mt-3 grid items-start gap-10 lg:grid-cols-[1fr_300px]">
        {/* A page in a diary: printed date box, a ribbon bookmark, faint rules, the photo taped in crooked */}
        <article className="relative bg-[#fffaf0] px-5 pt-8 pb-10 shadow-[4px_4px_0_#efe4cc,0_18px_32px_-18px_rgb(60_40_10/0.6)] [background-image:repeating-linear-gradient(transparent_0_33px,rgb(43_74_139/0.07)_33px_34px),var(--grain)] md:px-12 md:pt-10">
          <span aria-hidden="true" className="absolute -top-2 right-16 h-24 w-5 bg-brick [clip-path:polygon(0_0,100%_0,100%_100%,50%_85%,0_100%)] shadow-[0_2px_3px_rgb(0_0_0/0.3)] md:h-32" />
          <div className="flex flex-wrap items-start justify-between gap-3 border-b-2 border-ink/70 pb-3">
            <p className="inline-block -rotate-2 bg-leaf px-3 py-0.5 text-sm font-semibold text-white">{getStoryCategoryLabel(story.category)}</p>
            <p className="mr-10 border border-ink/40 px-3 py-1 text-center text-xs leading-tight text-ink-2">
              <span className="block font-display text-base font-bold text-ink">{story.date}</span>
              {toBn(story.readMins)} মিনিট পড়া
            </p>
          </div>
          <h1 className="mt-5 font-display text-[34px] leading-tight font-extrabold text-leaf md:text-5xl">
            <span className="brush">{story.title}</span>
          </h1>
          <p className="mt-4 font-hand text-xl leading-relaxed text-ink-blue">{story.excerpt}</p>

          <div className="relative mt-7 -rotate-1 bg-white p-2.5 pb-7 shadow-[0_14px_26px_-14px_rgb(60_40_10/0.6)]">
            <Tape className="-top-3 left-10 -rotate-6" />
            <Tape className="-top-3 right-10 rotate-6" />
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image src={story.image} alt={story.title} fill priority sizes="(max-width: 1024px) 92vw, 760px" placeholder="blur" className="object-cover" />
            </div>
          </div>

          <div className="mt-8 max-w-[68ch] text-[17px] leading-[34px] text-[#2b2f2a] md:text-lg md:leading-[34px]">
            {story.body.map((paragraph) => (
              <p key={paragraph} className="mt-[34px] first:mt-0">{paragraph}</p>
            ))}
          </div>

          <p className="mt-8 text-right font-hand text-xl text-ink-blue">— {story.author}</p>

          <StoryActions slug={story.slug} baseCount={story.reactions} />
        </article>

        <aside className="grid gap-8">
          {/* Memo pad: glued red header, the facts written on its page */}
          <section aria-labelledby="story-facts" className="rotate-1 bg-[#fdf8ec] shadow-[0_14px_26px_-14px_rgb(60_40_10/0.6)] [background-image:var(--grain)]">
            <h2 id="story-facts" className="bg-brick px-6 py-2.5 font-display text-lg font-bold text-white">গল্পের কিছু কথা</h2>
            <dl className="grid gap-3 px-6 py-5 text-[15px]">
              {facts.map(({ id, icon: Glyph, label, value }) => (
                <div key={id} className="grid grid-cols-[22px_70px_1fr] items-start gap-2 border-b border-dotted border-[#cdbb95] pb-2.5 last:border-0">
                  <Glyph aria-hidden="true" className="mt-1 size-4 text-brick" />
                  <dt className="text-ink-3">{label}:</dt>
                  <dd className="font-hand text-[17px] text-ink-blue">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <div className="relative mx-2">
            <Tape className="-top-3 left-6 -rotate-6" />
            <Scrap className="rotate-2 text-xl leading-normal">“{story.pullQuote}”</Scrap>
          </div>
        </aside>
      </div>

      <section aria-labelledby="more-stories" className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <SectionTitle id="more-stories" flowers="left" className="text-2xl md:text-2xl">আরও কিছু স্মৃতিচারণ</SectionTitle>
          <Link href="/stories" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-leaf">
            <ArrowLeft aria-hidden="true" className="size-4" />
            সব গল্পে ফিরে যান
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {story.more.map((item) => (
            <StoryCard key={item.slug} story={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
