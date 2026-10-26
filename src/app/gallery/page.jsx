import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";
import IdCard from "@/components/card/IdCard";
import FilterChips from "@/components/ui/FilterChips";
import Skeleton from "@/components/ui/Skeleton";
import { buttonClass } from "@/components/ui/Button";
import { galleryEras, getGalleryCards } from "@/api/gallery";
import { cardFields } from "@/api/cardOptions";

export const metadata = {
  title: "সব শৈশব পরিচয়পত্র",
  description: "আমাদের সবার গল্প, একসাথে। ৮০, ৯০ আর ২০০০-এর দশকের মানুষদের বানানো শৈশব পরিচয়পত্রের গ্যালারি।",
  alternates: { canonical: "/gallery" },
};

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];
const pins = ["bg-brick", "bg-leaf", "bg-mustard", "bg-ink-blue"];

// A round push pin
const Pin = ({ color }) => (
  <span aria-hidden="true" className={`absolute -top-2 left-1/2 z-[2] size-5 -translate-x-1/2 rounded-full shadow-[0_3px_4px_rgb(0_0_0/0.45),inset_-2px_-2px_3px_rgb(0_0_0/0.3),inset_2px_2px_3px_rgb(255_255_255/0.45)] ${color}`} />
);

const hrefFor = (id) => (id === "all" ? "/gallery" : `/gallery?era=${id}`);

// A sticky note pinned among the cards
const MakeYoursTile = () => (
  <div className="relative mb-8 break-inside-avoid rotate-2 bg-[#f7df7e] p-7 text-center shadow-[0_14px_22px_-12px_rgb(0_0_0/0.55)] [background-image:linear-gradient(180deg,rgb(0_0_0/0.06),transparent_15%),var(--grain)]">
    <Pin color="bg-brick" />
    <Box aria-hidden="true" className="mx-auto size-10 text-brick" />
    <p className="mt-2 font-hand text-2xl text-ink">আপনারটা বানান!</p>
    <p className="mt-1 font-hand text-[16px] text-ink-blue">আপনার শৈশব, আপনার গল্প। এখনই লিখুন।</p>
    <Link href="/card" className={buttonClass({ size: "sm", className: "mt-5" })}>
      শুরু করুন
      <ArrowRight aria-hidden="true" className="size-4" />
    </Link>
  </div>
);

const GallerySkeleton = () => (
  <div role="status" aria-busy="true" className="mt-7 columns-1 gap-5 sm:columns-2 lg:columns-3">
    <span className="sr-only">কার্ডগুলো লোড হচ্ছে</span>
    {["k1", "k2", "k3", "k4", "k5", "k6"].map((id) => (
      <Skeleton key={id} className="mb-5 h-[460px] break-inside-avoid" />
    ))}
  </div>
);

const GalleryGrid = async ({ searchParams }) => {
  const { era: rawEra } = await searchParams;
  const era = galleryEras.some((item) => item.id === rawEra) ? rawEra : "all";
  const cards = await getGalleryCards({ era });

  return (
    <>
      <div className="mt-7">
        <FilterChips label="দশক" items={galleryEras} active={era} hrefFor={hrefFor} variant="tab" />
      </div>
      {cards.length === 0 ? (
        <div className="paper mt-7 px-6 py-12 text-center">
          <p className="font-display text-2xl font-bold text-leaf">এই দশকের কোনো কার্ড এখনো নেই</p>
          <Link href="/card" className="mt-4 inline-flex min-h-11 items-center font-semibold text-leaf underline underline-offset-4">
            প্রথম কার্ডটা আপনিই বানান
          </Link>
        </div>
      ) : (
        // Corkboard in a wooden frame; every card is pinned on at a slight angle
        <div className="mt-8 rounded-lg border-[12px] border-[#8a5a2f] bg-[#b98a57] px-4 pt-9 pb-2 shadow-[inset_0_0_30px_rgb(0_0_0/0.35),0_20px_34px_-18px_rgb(40_20_5/0.7)] [background-image:radial-gradient(rgb(90_55_20/0.35)_1px,transparent_1.6px),radial-gradient(rgb(255_230_190/0.25)_1px,transparent_1.6px)] [background-position:0_0,5px_7px] [background-size:9px_9px,13px_13px] md:px-8">
          <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
            {cards.map((card, i) => (
              <div key={card.id} className={`relative mb-10 break-inside-avoid drop-shadow-[0_14px_14px_rgb(0_0_0/0.35)] ${tilts[i % tilts.length]}`}>
                <Pin color={pins[i % pins.length]} />
                <IdCard card={card} fields={cardFields.slice(1)} compact />
              </div>
            ))}
            <MakeYoursTile />
          </div>
        </div>
      )}
    </>
  );
};

const GalleryPage = ({ searchParams }) => {
  return (
    <div className="site-container px-5 sm:px-8 xl:px-0">
      <header className="pt-4 text-center">
        <h1 className="font-display text-[38px] leading-tight font-extrabold text-leaf md:text-6xl">
          সব <span className="brush">শৈশব পরিচয়পত্র</span>
        </h1>
        <p className="mt-2 text-lg text-ink-2">আমাদের সবার গল্প, একসাথে</p>
      </header>
      <Suspense fallback={<GallerySkeleton />}>
        <GalleryGrid searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default GalleryPage;
