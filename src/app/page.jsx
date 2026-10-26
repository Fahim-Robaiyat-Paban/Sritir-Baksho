import Link from "next/link";
import { ArrowRight, Check, Clock } from "lucide-react";
import Hero from "@/components/home/Hero";
import Poll from "@/components/home/Poll";
import AlbumTile from "@/components/home/AlbumTile";
import NewsClipping from "@/components/home/NewsClipping";
import QuizBoard from "@/components/home/QuizBoard";
import GameThumb from "@/components/games/GameThumb";
import IdCard from "@/components/card/IdCard";
import Button from "@/components/ui/Button";
import Polaroid from "@/components/ui/Polaroid";
import Scrap from "@/components/ui/Scrap";
import SectionTitle from "@/components/ui/SectionTitle";
import Tape from "@/components/ui/Tape";
import Reveal from "@/components/ui/Reveal";
import { getGalleryCards } from "@/api/gallery";
import { getGames } from "@/api/games";
import { getStories, storyCategories } from "@/api/stories";
import { cardFields, getCardObject, sampleCard } from "@/api/cardOptions";
import { bandMaskStyle } from "@/lib/utils/bandMask";
import { stampEdgeStyle } from "@/lib/utils/stampEdge";

const promoFields = cardFields.filter((field) => ["nick", "area", "friends", "game"].includes(field.id));

// Distance from the top of the line to each pegged card, following the curve's sag
const lineSag = [
  "[--peg-top:0px] md:pt-[15px] md:[--peg-top:15px]",
  "[--peg-top:0px] md:pt-[21px] md:[--peg-top:21px]",
  "[--peg-top:0px] md:pt-[24px] md:[--peg-top:24px]",
  "[--peg-top:0px] md:pt-[25px] md:[--peg-top:25px]",
  "[--peg-top:0px] md:pt-[24px] md:[--peg-top:24px]",
  "[--peg-top:0px] md:pt-[21px] md:[--peg-top:21px]",
  "[--peg-top:0px] md:pt-[15px] md:[--peg-top:15px]",
];
const thumbTilts = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]", "rotate-[1.5deg]"];
const fanTilts = ["-rotate-6", "rotate-3", "-rotate-2"];

const perks = ["তিনটা আলাদা ডিজাইন", "ছবি হিসেবে ডাউনলোড", "কোনো সাইন-আপ লাগে না"];
const promoCard = { ...sampleCard, object: "marbles", nick: "সোহেল", area: "মিরপুর", friends: "রাফি, তানভীর", game: "গুটি" };

const HomePage = async () => {
  const [games, stories, galleryCards] = await Promise.all([getGames(), getStories(), getGalleryCards()]);
  const recentCards = galleryCards.slice(0, 3);

  return (
    <>
      <Hero />
      <Poll />

      <Reveal as="section" className="site-container mt-16 px-5 sm:px-8 xl:px-0">
        <SectionTitle centered>স্মৃতির অ্যালবাম</SectionTitle>
        <div className="-mx-5 mt-7 grid auto-cols-[70%] grid-flow-col gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:auto-cols-auto md:grid-flow-row md:grid-cols-4 md:grid-rows-[190px_190px] md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-rows-[230px_230px]">
          {storyCategories.map((category, i) => (
            <AlbumTile key={category.id} category={category} featured={i === 0} className={i === 0 ? "md:col-span-2 md:row-span-2" : ""} />
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="site-container mt-20 px-5 sm:px-8 xl:px-0">
        <SectionTitle centered>ক্লাসিক গেমস সংগ্রহ</SectionTitle>
        <p className="mt-1 text-center text-[15px] font-semibold text-ink-2">আমাদের ঐতিহ্যবাহী খেলাগুলো, নিয়মসহ</p>
        <div className="relative mt-7 md:mt-8">
          {/* The line sags in the middle; each wrapper's top padding puts its peg on the curve */}
          <svg aria-hidden="true" viewBox="0 0 1000 60" preserveAspectRatio="none" className="absolute inset-x-0 top-0 hidden h-10 w-full md:block">
            <path d="M0 8 Q500 50 1000 8" fill="none" stroke="#8a6a3e" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="grid grid-cols-4 gap-2.5 md:grid-cols-7 md:gap-4">
            {games.slice(1, 8).map((game, i) => (
              <div key={game.slug} className={`relative ${lineSag[i]}`}>
                <span aria-hidden="true" className="absolute top-[calc(var(--peg-top)-14px)] left-1/2 z-[2] hidden h-6 w-2.5 -translate-x-1/2 rounded-[2px] bg-[linear-gradient(90deg,#a87b47,#c99a62,#a87b47)] shadow-[0_2px_3px_rgb(0_0_0/0.3)] md:block" />
                <GameThumb game={game} className={`origin-top ${thumbTilts[i % thumbTilts.length]}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/games" variant="green">
            সব খেলা দেখুন
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </Reveal>

      <section className="relative z-[1] mt-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-leaf [background-image:var(--grain)]"
          style={bandMaskStyle}
        />

        <div className="site-container relative px-5 py-12 sm:px-8 lg:py-10 xl:px-0">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px_200px] lg:gap-8 xl:grid-cols-[400px_370px_210px] xl:gap-10">

            {/* Left: copy */}
            <Reveal className="text-[#f3ead3]">
              <p className="inline-flex items-center gap-2 rounded-full bg-card/90 px-3.5 py-1 text-[13px] font-bold text-leaf shadow-[0_4px_10px_-6px_rgb(0_0_0/0.4)]">
                <Clock aria-hidden="true" className="size-3.5" />
                দুই মিনিটেই হয়ে যায়
              </p>
              <h2 className="mt-4 font-display text-[34px] leading-[1.15] font-extrabold text-white lg:text-[46px]">
                নিজের শৈশবের<br />
                <span className="brush text-leaf">পরিচয়পত্র</span>{" "}বানান
              </h2>
              <p className="mt-4 max-w-[380px] leading-relaxed text-[#e6dcbd]">
                ডাকনাম, পাড়া, প্রিয় বন্ধু, খেলা আর খাবার — সব এক কার্ডে। ডাউনলোড করে বন্ধুদের পাঠিয়ে দিন।
              </p>
              <ul className="mt-5 grid gap-2 text-[15px] text-[#efe6cb]">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2.5">
                    <Check aria-hidden="true" className="size-4 shrink-0 text-marker" />
                    {perk}
                  </li>
                ))}
              </ul>
              <Button href="/card" size="lg" className="mt-7">
                এখনই তৈরি করুন
                <ArrowRight aria-hidden="true" className="size-5" />
              </Button>
            </Reveal>

            {/* Centre: the card on top of its two sister designs */}
            <Reveal delay={0.1} className="relative z-[2] mx-auto w-full max-w-[340px] lg:-left-5 xl:-left-7">
              {/* Darker pool behind the deck so it reads like it's under a lamp */}
              <div aria-hidden="true" className="pointer-events-none absolute -inset-x-28 -inset-y-6 -z-[1] bg-[radial-gradient(closest-side,rgb(12_32_24/0.62),rgb(12_32_24/0.3)_55%,transparent)]" />
              <div aria-hidden="true" className="absolute inset-0 translate-x-5 translate-y-1 rotate-6 overflow-hidden shadow-[0_18px_30px_-14px_rgb(0_0_0/0.45)]">
                <IdCard card={{ ...promoCard, theme: "notebook", ink: "red" }} fields={promoFields} compact className="h-full" />
              </div>
              <div aria-hidden="true" className="absolute inset-0 -translate-x-5 translate-y-3 -rotate-[7deg] overflow-hidden shadow-[0_18px_30px_-14px_rgb(0_0_0/0.45)]">
                <IdCard card={{ ...promoCard, theme: "postcard", ink: "brown" }} fields={promoFields} compact className="h-full" />
              </div>
              <div className="relative -rotate-2 drop-shadow-[0_30px_45px_rgb(0_0_0/0.35)]">
                <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />
                <IdCard card={promoCard} fields={promoFields} compact />
              </div>
            </Reveal>

            {/* Right: proof, desktop only */}
            <Reveal delay={0.2} className="hidden lg:grid lg:justify-items-center lg:gap-7">
              <div className="-rotate-3 bg-[#f6ecd2] p-1.5 shadow-[0_12px_24px_-12px_rgb(0_0_0/0.5)]" style={stampEdgeStyle}>
                <div className="border-[1.5px] border-dashed border-brick/50 px-5 py-3.5 text-center">
                  <p className="font-display text-[34px] leading-none font-extrabold text-brick">১০,০০০+</p>
                  <p className="mt-1.5 text-[13px] font-semibold text-ink-2">পরিচয়পত্র বানানো হয়েছে</p>
                </div>
              </div>

              <div>
                <p className="text-center font-hand text-[17px] text-[#efe6cb]">সম্প্রতি যারা বানালেন…</p>
                <ul className="mt-3 flex justify-center">
                  {recentCards.map((card, i) => (
                    <li key={card.id} className="-ml-3 first:ml-0">
                      <Link href="/gallery" className={`relative block w-[78px] transition-transform duration-200 hover:z-[2] hover:-translate-y-1 hover:rotate-0 ${fanTilts[i % fanTilts.length]}`}>
                        <Polaroid image={getCardObject(card.object).image} alt="" sizes="72px" />
                        <span className="absolute inset-x-0 bottom-0.5 truncate px-1 text-center font-hand text-[13px] text-ink-blue">{card.nick}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/gallery" className="mx-auto mt-2 flex w-fit min-h-11 items-center text-sm font-semibold text-marker underline underline-offset-4 hover:text-white">
                  সব কার্ড দেখুন
                </Link>
              </div>

              <div className="relative">
                <Tape className="-top-3 left-6 -rotate-6" />
                <Scrap className="rotate-2 text-base">
                  “পাঠানোর পর বন্ধুরা সবাই নিজেরটা বানিয়ে ফেলল!”
                  <span className="mt-1.5 block font-body text-xs font-semibold text-ink-3">— রাকিব, মিরপুর</span>
                </Scrap>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="site-container mt-20 grid items-start gap-10 px-5 sm:px-8 lg:grid-cols-[1.6fr_1fr] lg:gap-8 xl:px-0">
        <Reveal>
          <NewsClipping stories={stories.slice(0, 3)} />
        </Reveal>
        <Reveal delay={0.1} className="lg:mt-6">
          <QuizBoard />
        </Reveal>
      </section>
    </>
  );
};

export default HomePage;
