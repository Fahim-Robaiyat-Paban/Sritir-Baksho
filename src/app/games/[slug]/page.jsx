import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Lightbulb, MapPin } from "lucide-react";
import AddToCardButton from "@/components/games/AddToCardButton";
import GameThumb from "@/components/games/GameThumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Tape from "@/components/ui/Tape";
import { getCategoryLabel, getGame, getGameSlugs } from "@/api/games";
import { toBn } from "@/lib/utils/format";

export const generateStaticParams = () => getGameSlugs().map((slug) => ({ slug }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const game = await getGame(slug);
  if (!game) return { title: "খেলা পাওয়া যায়নি" };
  return {
    title: `${game.name} খেলার নিয়ম`,
    description: game.intro,
    alternates: { canonical: `/games/${slug}` },
    openGraph: { title: game.name, description: game.line, images: [game.image.src] },
  };
};

const sections = [
  { id: "how", label: "কিভাবে খেলবেন" },
  { id: "names", label: "আঞ্চলিক নাম" },
  { id: "facts", label: "মজার তথ্য" },
  { id: "related", label: "সম্পর্কিত খেলা" },
];

const GamePage = async ({ params }) => {
  const { slug } = await params;
  const game = await getGame(slug);
  if (!game) notFound();

  const info = [
    { id: "players", label: "খেলোয়াড়", value: game.players },
    { id: "place", label: "জায়গা", value: game.place },
    { id: "duration", label: "সময়", value: game.duration },
    { id: "gear", label: "সরঞ্জাম", value: game.gear },
    { id: "season", label: "বেশি খেলা হতো", value: game.season },
  ];

  return (
    <div className="site-container px-5 sm:px-8 xl:px-0">
      <Link href="/games" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-2 hover:text-leaf">
        <ArrowLeft aria-hidden="true" className="size-4" />
        খেলার লাইব্রেরিতে ফিরে যান
      </Link>

      {/* Toy-box lid from a 90s neighbourhood shop: thick printed border, the game's picture, a price sticker */}
      <header className="relative mt-1 rounded-lg border-[10px] border-brick bg-[#f8eed6] p-1.5 shadow-[0_20px_34px_-18px_rgb(80_20_10/0.65)] [background-image:var(--grain)]">
        <div className="grid items-center gap-6 border-2 border-dashed border-mustard px-5 py-7 md:grid-cols-[1fr_340px] md:px-9">
          <div>
            <p className="inline-block -rotate-2 bg-leaf px-3 py-0.5 text-sm font-semibold text-white">{getCategoryLabel(game.category)}</p>
            <h1 className="mt-3 font-display text-5xl leading-tight font-extrabold text-brick md:text-7xl [text-shadow:3px_3px_0_var(--color-marker)]">{game.name}</h1>
            <p className="mt-3 text-lg text-ink-2">{game.line}</p>
          </div>
          <figure className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded border-4 border-white shadow-[0_10px_20px_-10px_rgb(60_40_10/0.6)]">
              <Image src={game.image} alt={game.name} fill priority sizes="(max-width: 768px) 90vw, 340px" placeholder="blur" className="object-cover" />
            </div>
            <p className="absolute -top-5 -right-4 grid size-20 rotate-12 place-items-center rounded-full bg-marker text-center font-display text-sm leading-tight font-extrabold text-ink shadow-[0_6px_10px_-4px_rgb(0_0_0/0.45)] [background-image:radial-gradient(circle,transparent_60%,rgb(0_0_0/0.08))]">
              দাম:<br />অমূল্য
            </p>
          </figure>
        </div>
      </header>

      <nav aria-label="এই পাতায়" className="-mx-5 mt-7 flex gap-2.5 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-md border-[1.5px] border-[#cdbb95] bg-card/70 px-4 text-[15px] font-semibold text-ink-2 hover:border-brick hover:text-brick"
          >
            <span aria-hidden="true" className="size-2 rotate-45 bg-brick" />
            {section.label}
          </a>
        ))}
      </nav>

      <div className="mt-6 grid items-start gap-8 lg:grid-cols-[1fr_300px]">
        {/* The rule sheet folded inside the box: two fold creases across it */}
        <article className="bg-[#fffaf0] px-6 py-8 shadow-[0_14px_30px_-18px_rgb(90_60_20/0.6)] [background-image:linear-gradient(transparent_33%,rgb(0_0_0/0.05)_33.2%,rgb(255_255_255/0.6)_33.5%,transparent_34%,transparent_66%,rgb(0_0_0/0.05)_66.2%,rgb(255_255_255/0.6)_66.5%,transparent_67%),var(--grain)] md:px-10">
          <p className="text-lg leading-relaxed text-ink-2">{game.intro}</p>

          <h2 id="how" className="mt-8 scroll-mt-6 border-b-2 border-ink/80 pb-1 font-display text-2xl font-extrabold text-ink">কিভাবে খেলবেন</h2>
          <ol className="mt-5 grid gap-4">
            {game.steps.map((step, i) => (
              <li key={step} className="grid grid-cols-[44px_1fr] items-start gap-3 text-base leading-relaxed md:text-[17px]">
                <span aria-hidden="true" className="font-display text-[38px] leading-none font-extrabold text-mustard [-webkit-text-stroke:1.5px_var(--color-brick)]">{toBn(i + 1)}</span>
                <span className="pt-1.5">{step}</span>
              </li>
            ))}
          </ol>

          {game.slug === "gollachut" && (
            <figure className="mt-8">
              <figcaption className="mb-2 font-display text-lg font-bold text-ink">খেলার মাঠের গঠন (উপর থেকে দেখা)</figcaption>
              <div className="relative aspect-[382/210] overflow-hidden rounded">
                <Image src={game.image} alt="চক দিয়ে আঁকা গোল্লাছুটের মাঠ, দুই দলের ঘর আর মাঝে গোল্লা" fill sizes="(max-width: 1024px) 90vw, 760px" className="object-cover" />
              </div>
            </figure>
          )}
        </article>

        <aside className="grid gap-8">
          {/* Shop tag tied on with string */}
          <div className="relative mt-4 rotate-1 rounded-r-lg bg-[#f6ead0] py-6 pr-6 pl-10 shadow-[0_12px_22px_-12px_rgb(60_40_10/0.6)] [clip-path:polygon(22px_0,100%_0,100%_100%,22px_100%,0_50%)] [background-image:var(--grain)]">
            <span aria-hidden="true" className="absolute top-1/2 left-5 size-3 -translate-y-1/2 rounded-full bg-paper shadow-[inset_0_1px_2px_rgb(0_0_0/0.4)]" />
            <dl className="grid gap-2.5 text-[15px]">
              {info.map((item) => (
                <div key={item.id} className="flex justify-between gap-4 border-b border-dashed border-[#c9b07a] pb-2">
                  <dt className="text-ink-3">{item.label}</dt>
                  <dd className="text-right font-semibold">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5">
              <AddToCardButton gameName={game.name} />
            </div>
          </div>

          {/* Folded map with a pin for each place */}
          <section aria-labelledby="names" className="scroll-mt-6 bg-[#e8efe2] px-6 py-6 shadow-[0_12px_22px_-14px_rgb(30_74_56/0.5)] [background-image:linear-gradient(90deg,transparent_49.5%,rgb(0_0_0/0.06)_50%,transparent_50.5%),radial-gradient(rgb(30_74_56/0.12)_1px,transparent_1.5px)] [background-size:100%_100%,14px_14px]">
            <h2 id="names" className="font-display text-xl font-bold text-leaf">আঞ্চলিক নাম</h2>
            <ul className="mt-3 grid gap-2.5 text-[15px]">
              {game.regionalNames.map((name) => (
                <li key={name.id} className="flex items-start gap-2">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 fill-brick text-brick" />
                  <span>
                    <b className="font-semibold">{name.name}</b> <span className="text-ink-3">({name.region})</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Sticky note */}
          <section aria-labelledby="facts" className="relative scroll-mt-6 -rotate-2 bg-[#f7df7e] px-6 pt-7 pb-6 shadow-[0_14px_24px_-14px_rgb(90_60_20/0.6)] [background-image:linear-gradient(180deg,rgb(0_0_0/0.06),transparent_18%),var(--grain)]">
            <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-2" />
            <h2 id="facts" className="flex items-center gap-2 font-hand text-xl text-ink">
              <Lightbulb aria-hidden="true" className="size-5" />
              মজার তথ্য
            </h2>
            <ul className="mt-2 grid gap-2 font-hand text-[16px] leading-snug text-ink-blue">
              {game.facts.map((fact) => (
                <li key={fact}>— {fact}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>

      <section aria-labelledby="related" className="mt-14">
        <SectionTitle id="related" flowers="left" className="text-2xl md:text-2xl">
          সম্পর্কিত খেলা
        </SectionTitle>
        <div className="mt-5 grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-5">
          {game.related.map((item, i) => (
            <GameThumb key={item.slug} game={item} className={i % 2 ? "rotate-1" : "-rotate-1"} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GamePage;
