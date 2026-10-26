import Link from "next/link";
import { HelpCircle } from "lucide-react";
import Tape from "@/components/ui/Tape";

// Tear-off strips at the bottom of the poster; each one is a way back
const strips = [
  { id: "home", label: "হোম", href: "/" },
  { id: "games", label: "খেলা", href: "/games" },
  { id: "stories", label: "গল্প", href: "/stories" },
  { id: "gallery", label: "গ্যালারি", href: "/gallery" },
  { id: "card", label: "কার্ড", href: "/card" },
];

// A "missing" poster stuck on a wall, the way lost things are announced on Bangladeshi streets
const NotFound = () => {
  return (
    <div className="site-container px-5 pt-8 sm:px-8 xl:px-0">
      <div className="relative mx-auto max-w-[520px] -rotate-1 bg-[#fffaf0] shadow-[0_22px_36px_-20px_rgb(60_40_10/0.65)] [background-image:var(--grain)]">
        <Tape className="-top-3 -left-4 -rotate-12" />
        <Tape className="-top-3 -right-4 rotate-12" />
        <div className="px-7 pt-8 pb-6 text-center">
          <p className="font-display text-sm font-bold text-brick">বিশেষ বিজ্ঞপ্তি</p>
          <h1 className="font-display text-5xl leading-tight font-extrabold text-ink md:text-6xl">হারানো গিয়াছে!</h1>
          <div className="mx-auto mt-5 grid aspect-[4/3] w-56 place-items-center border-4 border-ink/80 bg-paper-2">
            <HelpCircle aria-hidden="true" className="size-20 text-ink/40" />
          </div>
          <p className="mx-auto mt-5 max-w-sm text-[17px] leading-relaxed text-ink-2">
            একটি পাতা। বয়স অজানা। শেষবার দেখা গিয়াছিল এই ঠিকানায়। ঠিক লুকোচুরির মতো, কোথাও লুকিয়ে আছে হয়তো।
          </p>
          <p className="mt-3 font-hand text-lg text-ink-blue">সন্ধান না পাইলে নিচের যেকোনো একটা ছিঁড়ে নিয়ে যান</p>
        </div>
        <nav aria-label="ফিরে যান" className="grid grid-cols-5 border-t-2 border-dashed border-ink/40">
          {strips.map((strip) => (
            <Link
              key={strip.id}
              href={strip.href}
              className="flex h-28 items-center justify-center border-r border-dashed border-ink/30 transition-transform last:border-0 hover:translate-y-1 hover:-rotate-3 hover:bg-marker/30"
            >
              <span className="rotate-90 font-display text-base font-bold whitespace-nowrap text-leaf">{strip.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NotFound;
